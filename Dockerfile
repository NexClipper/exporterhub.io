## Base image gets
FROM node:12.18.3

## It is just Label when it has build automation.
LABEL version=0.2.3 

## OS command for create a directory
RUN mkdir /data

## Define a base directory when it runs.
WORKDIR /data

## File & Directory copy to WORKDIR
COPY ./package.json  /data
COPY ./src  /data/src
COPY ./public /data/public
COPY ./entrypoint.sh  /data

## Build of node runs
RUN npm install

## For test run
##ENTRYPOINT ["tail","-f","/data/package.json"]

## You can define the environment variable if you have some configurations.
## For example, if you have seperated database server, you can make a configuration as below.
#ENV MYSQL_SERVER "mysql.test.com"

## Make sure the port number for service expose
EXPOSE  3000

## ENTRYPOINT will be runs at the end of container attached
ENTRYPOINT /data/entrypoint.sh




