FROM node:16

WORKDIR /var/www

RUN npm install -g supervisor

EXPOSE 8000
CMD [ "npm", "run", "watchserver" ]