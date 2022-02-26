# syntax=docker/dockerfile:1

FROM node:17.5.0
ENV NODE_ENV=development

WORKDIR /app

COPY ./mount/package.json ./
COPY ./mount/yarn.lock ./
RUN yarn install
COPY mount/ ./
RUN yarn run codegen
CMD ["yarn", "run", "watch"]
