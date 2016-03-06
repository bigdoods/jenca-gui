FROM node:5.4.0-slim
MAINTAINER connor@jenca.io
RUN npm install -g ecstatic
COPY ./dist /website
ENTRYPOINT ["ecstatic"]
CMD ["--port", "8080", "--root", "/website"]