# Personal Finance Application Architecture

## 1. Tech Stack Recommendation
*   **Frontend:** React with Tailwind CSS (for responsive, utility-first styling) and Recharts (for data visualization).
*   **Backend:** FastAPI (Python) - High performance, native support for Asynchronous programming and WebSockets.
*   **Database:** PostgreSQL - Robust relational data modeling for financial transactions with support for JSONB (useful for flexible webhook metadata).
*   **Real-Time:** Redis Pub/Sub - To manage WebSocket message broadcasting across multiple backend instances.
*   **Authentication:** Clerk or Auth0 for secure, production-grade identity management.

## 2. Database Schema (SQL)

```sql
-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Accounts Table (Cash, Crypto, Brokerage)
CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'liquid', 'non-liquid', 'liability'
    category TEXT NOT NULL, -- 'cash', 'crypto', 'stock', 'real_estate', 'debt'
    balance DECIMAL(15, 2) DEFAULT 0.00,
    currency VARCHAR(3) DEFAULT 'USD',
    is_automated BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions Table
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    account_id UUID REFERENCES accounts(id),
    amount DECIMAL(15, 2) NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    transaction_date DATE DEFAULT CURRENT_DATE,
    type TEXT NOT NULL, -- 'income', 'expense'
    source TEXT, -- 'manual', 'webhook', 'plaid'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Investment Holdings (for Ticker Tracking)
CREATE TABLE holdings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    symbol VARCHAR(10) NOT NULL,
    quantity DECIMAL(15, 6) NOT NULL,
    cost_basis DECIMAL(15, 2),
    account_id UUID REFERENCES accounts(id)
);
```

## 3. Real-Time Logic (FastAPI Snippet)

```python
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            await connection.send_json(message)

manager = ConnectionManager()

@app.websocket("/ws/transactions/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    await manager.connect(websocket)
    try:
        while True:
            # Keep connection alive
            data = await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

# Webhook Endpoint
@app.post("/api/webhooks/bank-update")
async def bank_webhook(payload: dict):
    # 1. Process payload & Save to DB
    # 2. Broadcast update to frontend
    await manager.broadcast({"type": "NEW_TRANSACTION", "data": payload})
    return {"status": "success"}
```