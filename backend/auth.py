import os
import httpx
from jose import jwt, JWTError
from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import db

CLERK_JWKS_URL = os.getenv("CLERK_JWKS_URL", "")

security = HTTPBearer()
_jwks_cache: dict | None = None


async def _get_jwks() -> dict:
    global _jwks_cache
    if _jwks_cache:
        return _jwks_cache
    async with httpx.AsyncClient() as client:
        res = await client.get(CLERK_JWKS_URL, timeout=10)
        res.raise_for_status()
        _jwks_cache = res.json()
    return _jwks_cache


async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    token = credentials.credentials
    try:
        jwks = await _get_jwks()
        header = jwt.get_unverified_header(token)
        key = next((k for k in jwks["keys"] if k["kid"] == header["kid"]), None)
        if not key:
            raise HTTPException(status_code=401, detail="Unknown signing key")
        payload = jwt.decode(token, key, algorithms=["RS256"])
        clerk_id: str = payload.get("sub", "")
        if not clerk_id:
            raise HTTPException(status_code=401, detail="Invalid token subject")
    except (JWTError, StopIteration):
        raise HTTPException(status_code=401, detail="Invalid token")

    # Upsert user on first login
    email = payload.get("email", "")
    await db.execute(
        "INSERT OR IGNORE INTO users (clerk_id, email) VALUES (?, ?)",
        [clerk_id, email],
    )
    return clerk_id
