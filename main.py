from typing import List
import sqlalchemy as sa
import uvicorn as uvicorn
from fastapi import FastAPI

from pydantic import BaseModel
from sqlalchemy.orm import joinedload

from src.db import async_session
from src.db.models import Day
from src.db.models import DayORM

app = FastAPI()


@app.get("/days/", response_model=List[Day])
async def read_notes():
    # days = [{'date': '2022-01-28T00:00:02+00', 'training_day_type': {'name': 'Вс', 'details': {}}}]
    async with async_session() as db:
        res = (await db.execute(
            sa.select(DayORM).options(joinedload(DayORM.training_day_type)))
        ).scalars()
        days = Day.from_orms(res)
    return days


if __name__ == '__main__':
    uvicorn.run('main:app', host="0.0.0.0", port=8000, reload=True)
