from fastapi import APIRouter
from fastapi import Depends

from src.db.models import UserBase
from src.db.models import UserORM
from src.utils.deps import get_current_user

router = APIRouter()


@router.get("/users/me", response_model=UserBase)
async def read_users_me(current_user: UserBase = Depends(get_current_user)):
    return UserBase.from_orm(current_user)
