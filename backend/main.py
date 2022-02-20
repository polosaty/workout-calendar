import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.routers import auth
from src.routers import calendar
from src.routers import users

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Index(BaseModel):
    msg: str = 'HelloWorld'


@app.get("/", response_model=Index)
async def index():
    return Index()


app.include_router(auth.router)
app.include_router(users.router)
app.include_router(calendar.router)


if __name__ == '__main__':
    uvicorn.run('main:app', host="0.0.0.0", port=8000, reload=True)
