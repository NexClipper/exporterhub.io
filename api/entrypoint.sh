#!/bin/bash
parm=$APP_STAT
db_host=$DB_HOST
api_server="api"
port=8000
Check_api(){
COUNTER=0
while [ $COUNTER -lt 1 ]; do
    result=`curl -s $api_server:$port/init_done | grep "OK"`
    if [[ $result != "" ]];then
        COUNTER="1"
        echo "API server is ready!"
    fi
    sleep 1
done
}


case $parm in 
   server)
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
      python manage.py migrate 
      python manage.py runserver 0.0.0.0:$port
      ;;
   scheduler)
      Check_api
      python manage.py scheduler
      ;;
esac

