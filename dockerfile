
FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5656

EXPOSE 5656

CMD [ "node", "index.js"]