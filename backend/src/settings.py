import os

DATABASE_URL = os.getenv('DATABASE_URL')
if DATABASE_URL:
    DB_URL = DATABASE_URL.replace('postgres://', 'postgresql://')
    ASYNC_DB_URL = DATABASE_URL.replace('postgres://', 'postgresql+asyncpg://')
else:
    DB_URL = os.getenv('DB_URL', 'postgresql://user:password@127.0.0.1:5434/woc')
    ASYNC_DB_URL = os.getenv('ASYNC_DB_URL', 'postgresql+asyncpg://user:password@127.0.0.1:5434/woc')

ASYNC_DB_POOL_SIZE = os.getenv('ASYNC_DB_POOL_SIZE', 2)
