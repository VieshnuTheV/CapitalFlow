import os
from typing import Any
import httpx

TURSO_URL = os.getenv("TURSO_DATABASE_URL", "")
TURSO_AUTH_TOKEN = os.getenv("TURSO_AUTH_TOKEN", "")


def _arg(v: Any) -> dict:
    if v is None:
        return {"type": "null"}
    if isinstance(v, bool):
        return {"type": "integer", "value": "1" if v else "0"}
    if isinstance(v, int):
        return {"type": "integer", "value": str(v)}
    if isinstance(v, float):
        return {"type": "float", "value": str(v)}
    return {"type": "text", "value": str(v)}


def _rows(result: dict) -> list[dict]:
    cols = [c["name"] for c in result["cols"]]
    return [dict(zip(cols, [v.get("value") for v in row])) for row in result["rows"]]


async def execute(sql: str, args: list[Any] = []) -> list[dict]:
    pipeline_url = TURSO_URL.replace("libsql://", "https://") + "/v2/pipeline"
    payload = {
        "requests": [
            {"type": "execute", "stmt": {"sql": sql, "args": [_arg(a) for a in args]}},
            {"type": "close"},
        ]
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(
            pipeline_url,
            json=payload,
            headers={"Authorization": f"Bearer {TURSO_AUTH_TOKEN}"},
            timeout=10,
        )
        if not res.is_success:
            raise httpx.HTTPStatusError(
                f"{res.status_code}: {res.text}", request=res.request, response=res
            )
        result = res.json()["results"][0]["response"]["result"]
        return _rows(result)


async def execute_many(statements: list[tuple[str, list]]) -> list[list[dict]]:
    pipeline_url = TURSO_URL.replace("libsql://", "https://") + "/v2/pipeline"
    requests = [
        {"type": "execute", "stmt": {"sql": sql, "args": [_arg(a) for a in args]}}
        for sql, args in statements
    ]
    requests.append({"type": "close"})

    async with httpx.AsyncClient() as client:
        res = await client.post(
            pipeline_url,
            json={"requests": requests},
            headers={"Authorization": f"Bearer {TURSO_AUTH_TOKEN}"},
            timeout=10,
        )
        res.raise_for_status()
        results = res.json()["results"]
        return [_rows(r["response"]["result"]) for r in results[:-1]]


async def init_schema() -> None:
    import logging
    schema_path = os.path.join(os.path.dirname(__file__), "schema.sql")
    with open(schema_path) as f:
        raw = f.read()
    statements = [s.strip() for s in raw.split(";") if s.strip()]
    for stmt in statements:
        try:
            await execute(stmt)
        except Exception as e:
            logging.warning("Schema stmt skipped: %s — %s", stmt[:60], e)
