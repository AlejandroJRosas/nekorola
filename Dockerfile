FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install --prod

CMD pnpm deploy:commands; pnpm start