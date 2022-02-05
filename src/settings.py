import os

DB_URL = os.getenv('DB_URL', 'postgresql://postgres:postgres@db:5432/postgres_test')
ASYNC_DB_URL = os.getenv('ASYNC_DB_URL', 'postgresql+asyncpg://postgres:postgres@db:5432/postgres_test')
ASYNC_DB_POOL_SIZE = os.getenv('ASYNC_DB_POOL_SIZE', 2)
