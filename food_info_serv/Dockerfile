FROM node:20-alpine

WORKDIR /home/node/app

COPY ./src ./src
COPY ./package.json ./
COPY ./tsconfig.json ./

RUN npm install --location=global pnpm
RUN pnpm install
RUN pnpm run build 

CMD [ "pnpm", "run", "serve" ]