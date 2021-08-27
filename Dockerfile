## Build for multi-stage build
FROM node:lts-alpine as builder

LABEL version=release-fe0.3.12

WORKDIR /data

ARG NODE_ENV
#ENV NODE_ENV=${NODE_ENV}
ENV NODE_ENV=production
ENV TSC_COMPILE_ON_ERROR true

ENV CLIENT_ID=
ENV CLIENT_SECRETS=

COPY ./ /data

RUN yarn set version berry
RUN yarn install
RUN yarn build


## Build for runtime
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d

COPY --from=builder /data/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./entrypoint.sh /usr/share/entrypoint.sh
ENV SERVICE_PUBLIC "n"

EXPOSE 3000
ENTRYPOINT /usr/share/entrypoint.sh
