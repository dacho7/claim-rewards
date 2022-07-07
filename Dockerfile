FROM node:15

WORKDIR /src/app

COPY . .

RUN npm install

CMD ["npm", "start"]