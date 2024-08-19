FROM node:22-alpine3.20

EXPOSE 4200

WORKDIR /app

RUN npm install -g @angular/cli

USER node

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
