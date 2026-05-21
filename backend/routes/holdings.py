from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Optional
from auth import get_current_user
import db

router = APIRouter(prefix="/holdings", tags=["holdings"])


class HoldingIn(BaseModel):
    account_id: str
    symbol: str
    quantity: float
    cost_basis: Optional[float] = None


@router.get("")
async def list_holdings(clerk_id: str = Depends(get_current_user)):
    return await db.execute(
        """SELECT h.* FROM holdings h JOIN users u ON h.user_id = u.id
           WHERE u.clerk_id = ?
           ORDER BY h.symbol""",
        [clerk_id],
    )


@router.post("")
async def upsert_holding(body: HoldingIn, clerk_id: str = Depends(get_current_user)):
    existing = await db.execute(
        """SELECT id FROM holdings WHERE user_id = (SELECT id FROM users WHERE clerk_id = ?)
           AND account_id = ? AND symbol = ?""",
        [clerk_id, body.account_id, body.symbol],
    )
    if existing:
        await db.execute(
            "UPDATE holdings SET quantity = ?, cost_basis = ? WHERE id = ?",
            [body.quantity, body.cost_basis, existing[0]["id"]],
        )
    else:
        await db.execute(
            """INSERT INTO holdings (user_id, account_id, symbol, quantity, cost_basis)
               VALUES ((SELECT id FROM users WHERE clerk_id = ?), ?, ?, ?, ?)""",
            [clerk_id, body.account_id, body.symbol, body.quantity, body.cost_basis],
        )
    return {"status": "ok"}


@router.delete("/{holding_id}")
async def delete_holding(holding_id: str, clerk_id: str = Depends(get_current_user)):
    await db.execute(
        """DELETE FROM holdings WHERE id = ?
           AND user_id = (SELECT id FROM users WHERE clerk_id = ?)""",
        [holding_id, clerk_id],
    )
    return {"status": "deleted"}
