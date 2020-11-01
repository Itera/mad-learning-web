FROM node:12.18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm config set loglevel warn

RUN npm install

COPY . /app/

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=0 /app/build/ /usr/share/nginx/html
COPY --from=0 /app/scripts/ /scripts

ENTRYPOINT [ "/scripts/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]