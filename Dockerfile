FROM node:16.18.1

WORKDIR /app

RUN apt update && apt upgrade -y
RUN npm install
RUN npm install -g yalc

EXPOSE 3000

CMD ["node"]
