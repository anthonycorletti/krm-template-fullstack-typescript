FROM node:lts-alpine AS api

WORKDIR /api
COPY . /api

RUN apk update \
    && npm ci \
    && npm run build

CMD npm start
