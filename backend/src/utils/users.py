import hashlib
import random
import string
from datetime import datetime
from datetime import timedelta
from typing import Optional

import sqlalchemy as sa
from sqlalchemy import and_
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.models import TokenBase
from src.db.models.auth import TokenORM
from src.db.models.auth import UserCreate
from src.db.models.auth import UserORM


def get_random_string(length=12):
    """ Генерирует случайную строку, использующуюся как соль """
    return "".join(random.choice(string.ascii_letters) for _ in range(length))


def hash_password(password: str, salt: str = None):
    """ Хеширует пароль с солью """
    if salt is None:
        salt = get_random_string()
    enc = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 100_000)
    return enc.hex()


def validate_password(password: str, hashed_password: str):
    """ Проверяет, что хеш пароля совпадает с хешем из БД """
    salt, hashed = hashed_password.split("$")
    return hash_password(password, salt) == hashed


async def get_user_by_name(name: str, db: AsyncSession) -> Optional[UserORM]:
    """ Возвращает информацию о пользователе """
    query = sa.select(UserORM).where(UserORM.name == name)
    return (await db.execute(query)).scalar_one_or_none()


async def get_user_by_token(token: str, db: AsyncSession) -> Optional[UserORM]:
    """ Возвращает информацию о владельце указанного токена """
    query = sa.select(UserORM).join(TokenORM).where(
        and_(
            TokenORM.access_token == token,
            TokenORM.expires > datetime.utcnow()
        )
    )
    return (await db.execute(query)).scalar_one_or_none()


async def create_user_token(user_id: int, db: AsyncSession) -> TokenORM:
    """ Создает токен для пользователя с указанным user_id """
    query = (
        sa.insert(TokenORM)
        .values(expires=datetime.utcnow() + timedelta(weeks=2), user_id=user_id)
        .returning(TokenORM.access_token, TokenORM.expires)
    )

    return (await db.execute(query)).fetchone()


async def create_user(user: UserCreate, db: AsyncSession):
    """ Создает нового пользователя в БД """
    salt = get_random_string()
    hashed_password = hash_password(user.password, salt)
    query = (sa.insert(UserORM).values(
        name=user.name, hashed_password=f"{salt}${hashed_password}"
    ).returning(UserORM.id))
    user_id = (await db.execute(query)).scalar()
    token = await create_user_token(user_id, db)
    token_dict = TokenBase.from_orm(token)

    return {**user.dict(), "id": user_id, "is_active": True, "token": token_dict}
