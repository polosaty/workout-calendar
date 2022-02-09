from typing import Callable

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import DeclarativeMeta
from sqlalchemy.orm import sessionmaker

from src.settings import ASYNC_DB_POOL_SIZE
from src.settings import ASYNC_DB_URL

BaseORM: DeclarativeMeta = declarative_base()
engine = create_async_engine(ASYNC_DB_URL, pool_size=ASYNC_DB_POOL_SIZE, max_overflow=0)
async_session: Callable[..., AsyncSession] = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
