FROM node:5.2.0-slim
MAINTAINER connor@jenca.io
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install ecstatic minimist
COPY . /app
ENTRYPOINT ["node", "index.js"]