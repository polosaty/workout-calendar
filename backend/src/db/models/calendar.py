from typing import Iterable
from typing import List
from typing import Optional
from typing import Union

from dateutil import rrule
import datetime
from typing import Any
from typing import Dict

from pydantic import BaseModel
from sqlalchemy import Column
from sqlalchemy import ForeignKey
import sqlalchemy as sa
from sqlalchemy import func
from sqlalchemy.orm import backref
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from src.db import BaseORM


class TrainingDayTypeORM(BaseORM):
    __tablename__ = 'training_day_type'

    id = Column(sa.Integer, primary_key=True)
    name = Column(sa.VARCHAR(200))
    details = Column(JSONB, nullable=True)


class TrainingDayType(BaseModel):
    id: Optional[int] = None
    name: str
    details: Dict[str, Any]

    @classmethod
    def from_orm(cls, obj: TrainingDayTypeORM):
        return cls(
            id=obj.id,
            name=obj.name,
            details=obj.details
        )

class DayORM(BaseORM):
    __tablename__ = 'day'

    date = Column(sa.TIMESTAMP(timezone=True), primary_key=True, server_default=func.now())
    training_day_type_id = Column(
        ForeignKey("training_day_type.id", ondelete='RESTRICT'),
        nullable=False,
        unique=False,
        index=True,
    )
    training_day_type = relationship(
        "TrainingDayTypeORM", uselist=False,
        backref=backref("days", lazy='noload'),
    )


class Day(BaseModel):
    date: datetime.datetime
    training_day_type: TrainingDayType

    @classmethod
    def from_orm(cls, obj: DayORM) -> "Day":
        return cls(
            date=obj.date,
            training_day_type=TrainingDayType.from_orm(obj.training_day_type)
        )

    @classmethod
    def from_orms(cls, objs: Iterable[DayORM]) -> List["Day"]:
        return [
            cls.from_orm(obj) for obj in objs
        ]


class Schedule(BaseModel):
    rrule: str
    is_active: bool


class ScheduleWithId(Schedule):
    id: int


class ScheduleORM(BaseORM):
    __tablename__ = 'schedule'

    id = Column(sa.Integer, primary_key=True)
    rrule = Column(sa.TEXT, nullable=False)
    is_active = Column(sa.Boolean, server_default='false')
