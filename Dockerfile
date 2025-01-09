# Stage 1: build the app's static assets in a Node container.
FROM node:18 AS builder

WORKDIR /ui

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

# add files to context
COPY app ./app
COPY gulp ./gulp
COPY gulpfile.js .
COPY bower.json .
COPY properties/templates.json ./properties/templates.json

# build it
RUN yarn run build-docker

# Stage 2: serve the app itself using nginx.
FROM nginx:1.24.0-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/40-adjust-index-html.sh /docker-entrypoint.d
COPY nginx/50-add-upstream.sh /docker-entrypoint.d
# required when using rootless docker
COPY set_permissions.sh /docker-entrypoint.d/ 

# enable the commands below for setting up SSL connection, with SSL cert info
# COPY certificates/sslcert.crt /etc/ssl/certs
# COPY certificates/sslcert.key /etc/ssl/private
COPY --from=builder /ui/dist /usr/share/nginx/html
RUN chmod +x /docker-entrypoint.d/set_permissions.sh
