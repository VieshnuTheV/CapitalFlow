from fastapi import APIRouter, Depends
from auth import get_current_user
import db

router = APIRouter(prefix="/net-worth", tags=["net-worth"])


@router.get("")
async def get_net_worth(clerk_id: str = Depends(get_current_user)):
    rows = await db.execute(
        """SELECT type, SUM(balance) as total
           FROM accounts
           WHERE user_id = (SELECT id FROM users WHERE clerk_id = ?)
           GROUP BY type""",
        [clerk_id],
    )
    buckets = {r["type"]: float(r["total"] or 0) for r in rows}
    liquid = buckets.get("liquid", 0.0)
    non_liquid = buckets.get("non-liquid", 0.0)
    liabilities = buckets.get("liability", 0.0)
    return {
        "liquid": liquid,
        "non_liquid": non_liquid,
        "liabilities": liabilities,
        "total": liquid + non_liquid - liabilities,
    }
