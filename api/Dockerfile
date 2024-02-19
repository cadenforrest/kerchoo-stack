# pull official base image
FROM python:3.11.2-slim-buster AS base

# set working directory
WORKDIR /usr/src/app
ENV PORT=8000

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update \
  && apt-get -y install netcat gcc \
  && apt-get clean

# install python dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

FROM base AS dev
ENV DJANGO_SETTINGS_MODULE=api.settings
COPY api/ .
