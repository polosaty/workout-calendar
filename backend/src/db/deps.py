from typing import AsyncGenerator

from src.db import async_session


async def get_db() -> AsyncGenerator:
    async with async_session() as db:
        yield db

