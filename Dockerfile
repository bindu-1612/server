FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]