from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from auth import get_current_user
import db

router = APIRouter(prefix="/accounts", tags=["accounts"])


class AccountIn(BaseModel):
    name: str
    type: str
    category: str
    balance: float = 0.0
    currency: str = "USD"


@router.get("")
async def list_accounts(clerk_id: str = Depends(get_current_user)):
    return await db.execute(
        "SELECT a.* FROM accounts a JOIN users u ON a.user_id = u.id WHERE u.clerk_id = ?",
        [clerk_id],
    )


@router.post("")
async def create_account(body: AccountIn, clerk_id: str = Depends(get_current_user)):
    await db.execute(
        """INSERT INTO accounts (user_id, name, type, category, balance, currency)
           VALUES ((SELECT id FROM users WHERE clerk_id = ?), ?, ?, ?, ?, ?)""",
        [clerk_id, body.name, body.type, body.category, body.balance, body.currency],
    )
    return {"status": "created"}


@router.patch("/{account_id}/balance")
async def update_balance(account_id: str, balance: float, clerk_id: str = Depends(get_current_user)):
    rows = await db.execute(
        "SELECT id FROM accounts WHERE id = ? AND user_id = (SELECT id FROM users WHERE clerk_id = ?)",
        [account_id, clerk_id],
    )
    if not rows:
        raise HTTPException(status_code=404, detail="Account not found")
    await db.execute(
        "UPDATE accounts SET balance = ?, updated_at = datetime('now') WHERE id = ?",
        [balance, account_id],
    )
    return {"status": "updated"}


@router.delete("/{account_id}")
async def delete_account(account_id: str, clerk_id: str = Depends(get_current_user)):
    rows = await db.execute(
        "SELECT id FROM accounts WHERE id = ? AND user_id = (SELECT id FROM users WHERE clerk_id = ?)",
        [account_id, clerk_id],
    )
    if not rows:
        raise HTTPException(status_code=404, detail="Account not found")
    await db.execute("DELETE FROM accounts WHERE id = ?", [account_id])
    return {"status": "deleted"}
