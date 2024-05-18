FROM node:20.12.0-alpine3.19

COPY . /app
RUN cd /app && npm i && npm run build

FROM nginx:stable-alpine3.17-slim
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

