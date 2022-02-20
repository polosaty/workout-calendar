import datetime
from typing import List

from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

import src.utils.calendar as utils_calendar
from src.db.deps import get_db
from src.db.models import Day
from src.db.models import DayIn
from src.db.models import ScheduleWithDates
from src.db.models import TrainingDayType
from src.db.models import UserORM
from src.utils.deps import get_current_user

router = APIRouter()


@router.delete("/day/{date}/")
async def delete_day(
        date: datetime.datetime,
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)) -> int:

    res = await utils_calendar.delete_day(date=date, db=db, user=current_user)
    await db.commit()
    return res.rowcount


@router.post("/day/", response_model=DayIn)
async def create_day(
        day: DayIn,
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)) -> Day:

    day = await utils_calendar.create_day(day=day, db=db, user=current_user)
    await db.commit()
    return day


@router.get("/days/", response_model=List[Day])
async def read_days(
        from_date: datetime.datetime = None,
        to_date: datetime.datetime = None,
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)
) -> List[Day]:
    # days = [{'date': '2022-01-28T00:00:02+00', 'training_day_type': {'name': 'Вс', 'details': {}}}]
    return await utils_calendar.read_days(from_date, to_date, current_user=current_user, db=db)


@router.get("/training_day_types/", response_model=List[TrainingDayType])
async def read_training_day_types(
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)
) -> List[TrainingDayType]:
    return await utils_calendar.read_training_day_types(current_user=current_user, db=db)


@router.get("/schedule/", response_model=List[ScheduleWithDates])
async def read_schedule(
        from_date: datetime.datetime = None,
        to_date: datetime.datetime = None,
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)
) -> List[ScheduleWithDates]:
    return await utils_calendar.read_schedule(from_date, to_date, current_user=current_user, db=db)
