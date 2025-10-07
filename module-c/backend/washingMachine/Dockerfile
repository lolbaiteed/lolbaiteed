FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev || true

COPY . .

RUN npm run build

CMD ["node", "dist/machine.js"]
