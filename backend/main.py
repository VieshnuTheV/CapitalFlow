import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

from routes import accounts, transactions, holdings, net_worth
import db


@asynccontextmanager
async def lifespan(_: FastAPI):
    await db.init_schema()
    yield


app = FastAPI(title="CapitalFlow API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(accounts.router, prefix="/api")
app.include_router(transactions.router, prefix="/api")
app.include_router(holdings.router, prefix="/api")
app.include_router(net_worth.router, prefix="/api")


@app.get("/health")
async def health():
    return {"status": "ok"}
