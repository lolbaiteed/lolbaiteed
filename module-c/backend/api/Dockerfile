FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

CMD ["bash", "./entrypoint.sh"]
