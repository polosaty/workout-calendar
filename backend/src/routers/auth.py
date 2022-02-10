from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession

import src.utils.users as users_utils
from src.db.deps import get_db
from src.db.models import TokenBase
from src.db.models import UserWithToken
from src.db.models import UserCreate

router = APIRouter()


@router.post("/auth", response_model=TokenBase)
async def auth(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    user = await users_utils.get_user_by_name(name=form_data.username, db=db)

    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    if not users_utils.validate_password(
        password=form_data.password, hashed_password=user.hashed_password
    ):
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    token = await users_utils.create_user_token(user_id=user.id, db=db)
    await db.commit()
    return token


@router.post("/sign-up", response_model=UserWithToken)
async def create_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
    db_user = await users_utils.get_user_by_name(name=user.name, db=db)
    if db_user:
        raise HTTPException(status_code=400, detail="User name already registered")
    user = await users_utils.create_user(user=user, db=db)
    await db.commit()
    return user
