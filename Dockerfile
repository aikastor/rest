FROM node:slim
WORKDIR /app
COPY package*.json ./

RUN yarn install
COPY . /app

EXPOSE 8080
CMD ["yarn", "dev"]

