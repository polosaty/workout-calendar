import os

import uvicorn
from os import environ
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.responses import RedirectResponse

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


@app.get("/")
@app.get("/login")
@app.get("/board")
@app.get("/home")
async def index():
    if os.path.isdir('static'):
        return RedirectResponse("/static/index.html")

    return Index()

app.mount("/static", StaticFiles(directory="static"), name="static")


app.include_router(auth.router)
app.include_router(users.router)
app.include_router(calendar.router)


if __name__ == '__main__':
    uvicorn.run('main:app', host="0.0.0.0", port=int(environ.get('PORT', 8000)), reload=True)
