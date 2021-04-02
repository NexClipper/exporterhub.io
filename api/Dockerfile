## Base image gets
FROM python:3.8

## It is just Label when it has build automation.
LABEL version=release-api0.2.9

RUN apt-get update && apt-get install -y --no-install-recommends \
		netcat \
	&& rm -rf /var/lib/apt/lists/*

## OS command for create a directory
RUN mkdir /data

## Define a base directory when it runs.
WORKDIR /data

## File & Directory copy to WORKDIR
COPY requirements.txt /data/
COPY manage.py /data/
#COPY exporterhub_schema.sql /data/
COPY entrypoint.sh /data/
#COPY my_settings.py /data/

## Initializing for run
RUN pip install -r requirements.txt

COPY exporterhub /data/exporterhub
COPY hub /data/hub
COPY exporter /data/exporter
COPY user /data/user
COPY headtoken /data/headtoken
COPY exporter_list.csv /data
COPY csv /data/csv
COPY db_uploader.py /data

## For test run
##ENTRYPOINT ["tail","-f","/data/package.json"]

## You can define the environment variable if you have some configurations.
## For example, if you have seperated database server, you can make a configuration as below.
#ENV MYSQL_SERVER "mysql.test.com"
ENV PYTHONUNBUFFERED=1
ENV APP_STAT=server

## Make sure the port number for service expose
EXPOSE 8000

## ENTRYPOINT will be runs at the end of container attached
ENTRYPOINT /data/entrypoint.sh




