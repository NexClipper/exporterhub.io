#!/bin/bash

## Define the parameter from env. variables
parm=$APP_STAT
db_host=$DB_HOST
api_server="api"

## Defie a port number for API server runs
port=8000

## Function for API server alive check
Check_api(){
	COUNTER=0
	while [ $COUNTER -lt 1 ]; do
	result=`curl -s $api_server:$port/init_done | grep "OK"`
		if [[ $result != "" ]];then
			COUNTER="1"
			echo "API server is ready!"
		else
			echo "Checking the API server..."
		fi
	sleep 1
	done
}

## Function for DB server alive check
Check_db(){
	set -eu
	echo "Checking DB connection ..."
		
	i=0
	while [ $i -lt 10 ];do
		nc -z $db_host 3306 && break
		echo "$i: Waiting for DB 1 second ..."
		let i=$i+1
		sleep 1
	done

	if [ $i -eq 10 ];then
		echo "DB connection refused, terminating ..."
		exit 1
	else
		echo "DB is up ..."
	fi
}

## Instruction for type of runtime
case $parm in 
	server)
		Check_db
		python manage.py migrate 
		#cp -fv ./exporterhub/urls_back.py ./exporterhub/urls.py
		#echo "Modify the file: ./exporterhub/urls_back.py -> ./exporterhub/urls.py"
		python manage.py runserver 0.0.0.0:$port
		;;
	scheduler)
		Check_api
		python manage.py scheduler
		;;
	*)
		echo "Nothing define the type of run time. Please make sure the type of runtime as below."
		echo " - ex) [APP_STAT=\"server\" or scheduler]"
	;;
esac

