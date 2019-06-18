FROM node:8-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash
COPY . /app
WORKDIR /app
RUN yarn
ENTRYPOINT [ "yarn", "run", "server" ]