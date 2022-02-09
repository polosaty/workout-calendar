FROM python:3.9-slim-buster AS builder

WORKDIR /tmp/dist/debs
COPY ./requirements.txt /tmp/
RUN apt-get -o Acquire::Retries=3 update \
    && apt-get -o Acquire::Retries=3 install -y git \
    && rm -rf /var/lib/apt/lists/*  \
    && pip install --no-cache-dir -r /tmp/requirements.txt

#
#FROM python:3.9-slim-buster
ARG UID=1000

WORKDIR /app
RUN adduser \
    --disabled-password \
    --no-create-home \
    --shell /bin/bash \
    --gecos "" \
    --uid ${UID} \
    --home /app \
    app && \
    chown -R app:app /app

USER app
