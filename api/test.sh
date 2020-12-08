#!/bin/bash




COUNTER=0
while [  $COUNTER -lt 1 ]; do
                result=`curl -s localhost:8000/init_done | grep "OK"`
                if [[ $result != "" ]];then
                        COUNTER="1"
			echo "gattch"
                fi
                sleep 1
done
