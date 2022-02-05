import sqlalchemy as sa
from datetime import datetime
from typing import Optional

from pydantic import BaseModel
from pydantic import UUID4
from pydantic import validator
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import backref
from sqlalchemy.orm import relationship

from src.db import BaseORM


class TokenBase(BaseModel):
    token: UUID4
    expires: datetime
    token_type: Optional[str] = "bearer"

    @validator("token")
    def hexlify_token(cls, value):
        """ Конвертирует UUID в hex строку """
        return value.hex


class UserORM(BaseORM):
    __tablename__ = "user"

    id = sa.Column("id", sa.Integer, primary_key=True)
    name = sa.Column("name", sa.String(100))
    hashed_password = sa.Column("hashed_password", sa.String())
    is_active = sa.Column(
        "is_active",
        sa.Boolean(),
        server_default=sa.sql.expression.true(),
        nullable=False,
    )


class UserBase(BaseModel):
    """ Return response data """
    id: int
    name: str


class UserCreate(BaseModel):
    """ Validate request data """
    name: str
    password: str


class User(UserBase):
    """ Return detailed response data with token """
    token: TokenBase = {}


class TokenORM(BaseORM):
    __tablename__ = "token"

    id = sa.Column("id", sa.Integer, primary_key=True)
    token = sa.Column(
        "token",
        UUID(as_uuid=False),
        server_default=sa.text("uuid_generate_v4()"),
        unique=True,
        nullable=False,
        index=True,
    )
    expires = sa.Column("expires", sa.DateTime())
    user_id = sa.Column("user_id", sa.ForeignKey("user.id"))
    user = relationship(
        "UserORM", uselist=False,
        backref=backref("tokens", lazy='noload'),
    )

