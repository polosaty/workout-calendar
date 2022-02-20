import datetime
from typing import List
from dateutil.rrule import rrulestr
from fastapi import Depends
import sqlalchemy as sa
from pydantic import parse_obj_as
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload

from src.db.deps import get_db
from src.db.models import Day
from src.db.models import DayIn
from src.db.models import ScheduleWithDates
from src.db.models import ScheduleWithId
from src.db.models import TrainingDayType
from src.db.models import UserORM
from src.db.models.calendar import DayORM
from src.db.models.calendar import ScheduleORM
from src.db.models.calendar import TrainingDayTypeORM
from src.utils.deps import get_current_user


async def delete_day(date: datetime.datetime, db: AsyncSession, user: UserORM):
    res = (await db.execute(
        sa.delete(DayORM)
        .where(
            DayORM.date == date,
            DayORM.user_id == user.id
        )
    ))
    return res


async def read_days(
    from_date: datetime.datetime = None,
    to_date: datetime.datetime = None,
    current_user: UserORM = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
) -> List[Day]:

    to_date = to_date or datetime.datetime.utcnow()
    from_date = from_date or to_date - datetime.timedelta(days=7)
    res = (await db.execute(
        sa.select(DayORM)
        .options(joinedload(DayORM.training_day_type))
        .where(
            sa.between(DayORM.date, from_date, to_date),
            DayORM.user_id == current_user.id
        )
    )).scalars()
    days = Day.from_orms(res)
    return days


async def read_training_day_types(
        current_user: UserORM = Depends(get_current_user),
        db: AsyncSession = Depends(get_db)
) -> List[TrainingDayType]:
    res = (await db.execute(
        sa.select(TrainingDayTypeORM)
        .where(
            TrainingDayTypeORM.user_id == current_user.id
        )
    )).scalars()
    training_day_types = TrainingDayType.from_orms(res)
    return training_day_types


async def read_schedule(
    from_date: datetime.datetime = None,
    to_date: datetime.datetime = None,
    current_user: UserORM = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
) -> List[ScheduleWithDates]:
    to_date = to_date or datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)
    from_date = from_date or to_date - datetime.timedelta(days=7)
    res = (await db.execute(
        sa.select(ScheduleORM)
        .where(
            ScheduleORM.user_id == current_user.id,
            ScheduleORM.is_active == True
        )
    )).scalars()
    schedules_with_dates = []
    s: ScheduleORM
    for s in res:
        dates = []
        dates += rrulestr(s.rrule).between(from_date, to_date)
        schedules_with_dates.append(ScheduleWithDates(
            id=s.id,
            rrule=s.rrule,
            is_active=s.is_active,
            dates=dates,
        ))
    # schedules = parse_obj_as(res, List[ScheduleWithId])
    return schedules_with_dates


async def create_day(day: DayIn, user: UserORM, db: AsyncSession):
    query = (sa.insert(DayORM).values(
        user_id=user.id,
        date=day.date,
        training_day_type_id=day.training_day_type_id,
        details=day.details
    ).returning(DayORM.date))
    day_date = (await db.execute(query)).scalar()
    day.date = day_date
    return day
