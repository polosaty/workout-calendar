from typing import List

import sqlalchemy as sa
import uvicorn as uvicorn
from fastapi import Depends
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload

from src.db.deps import get_db
from src.db.models import Day
from src.db.models import DayORM
from src.routers import auth
from src.routers import users

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Index(BaseModel):
    msg: str = 'HelloWorld'


@app.get("/", response_model=Index)
async def index():
    return Index()


@app.get("/days/", response_model=List[Day])
async def read_notes(db: AsyncSession = Depends(get_db)):
    # days = [{'date': '2022-01-28T00:00:02+00', 'training_day_type': {'name': 'Вс', 'details': {}}}]
    res = (await db.execute(
        sa.select(DayORM).options(joinedload(DayORM.training_day_type)))
    ).scalars()
    days = Day.from_orms(res)
    return days


app.include_router(auth.router)
app.include_router(users.router)


if __name__ == '__main__':
    uvicorn.run('main:app', host="0.0.0.0", port=8000, reload=True)
