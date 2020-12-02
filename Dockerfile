FROM node:12.18.3
LABEL version=0.1
WORKDIR /data
ADD ./package.json  /data/
ADD ./src  /data/
ADD ./public /data/
ADD ./entrypoint.sh  /
RUN npm install
#ENV API_SERVER "0.0.0.0"
#ENTRYPOINT entrypoint.sh
CMD ["npm", "start"]
EXPOSE  3000
