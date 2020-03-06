FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
RUN yarn install

EXPOSE 8000
CMD [ "yarn", "dev" ]
COPY . .
