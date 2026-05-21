from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from typing import Optional
from auth import get_current_user
import db

router = APIRouter(prefix="/transactions", tags=["transactions"])


class TransactionIn(BaseModel):
    account_id: str
    amount: float
    category: str
    description: str = ""
    transaction_date: Optional[str] = None
    type: str
    source: str = "manual"


@router.get("")
async def list_transactions(
    account_id: Optional[str] = Query(None),
    limit: int = Query(50, le=200),
    clerk_id: str = Depends(get_current_user),
):
    if account_id:
        return await db.execute(
            """SELECT t.* FROM transactions t JOIN users u ON t.user_id = u.id
               WHERE u.clerk_id = ? AND t.account_id = ?
               ORDER BY t.transaction_date DESC LIMIT ?""",
            [clerk_id, account_id, limit],
        )
    return await db.execute(
        """SELECT t.* FROM transactions t JOIN users u ON t.user_id = u.id
           WHERE u.clerk_id = ?
           ORDER BY t.transaction_date DESC LIMIT ?""",
        [clerk_id, limit],
    )


@router.post("")
async def create_transaction(body: TransactionIn, clerk_id: str = Depends(get_current_user)):
    await db.execute(
        """INSERT INTO transactions (user_id, account_id, amount, category, description, transaction_date, type, source)
           VALUES ((SELECT id FROM users WHERE clerk_id = ?), ?, ?, ?, ?, COALESCE(?, date('now')), ?, ?)""",
        [
            clerk_id,
            body.account_id,
            body.amount,
            body.category,
            body.description,
            body.transaction_date,
            body.type,
            body.source,
        ],
    )
    return {"status": "created"}
