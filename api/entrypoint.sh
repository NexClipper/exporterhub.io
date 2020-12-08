#!/bin/sh
parm=$APP_STAT
db_host=$DB_HOST
set -eu
 
echo "Checking DB connection ..."
 
i=0
until [ $i -ge 10 ]
do
  nc -z $db_host 3306 && break
 
  i=$(( i + 1 ))
 
  echo "$i: Waiting for DB 1 second ..."
  sleep 1
done
 
if [ $i -eq 10 ]
then
  echo "DB connection refused, terminating ..."
  exit 1
fi
 
echo "DB is up ..."

case $parm in 
   server)
      python manage.py migrate 
      python manage.py runserver 0.0.0.0:8000
      ;;
   scheduler)
      sleep 10
      python manage.py scheduler
      ;;
esac

