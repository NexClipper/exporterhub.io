#!/bin/sh

## Test stemping
echo "$SERVICE_URL" > /usr/share/server_addr.txt
echo "$API_SERVER" >> /usr/share/server_addr.txt

sed -i "s#%%CHGSVRURL%%#$SERVICE_URL#g" /usr/share/nginx/html/static/js/*.js
sed -i "s#%%CHGAPISVR%%#$API_SERVER#g" /usr/share/nginx/html/static/js/*.js
sed -i "s#%%CHGSTATUS%%#$SERVICE_PUBLIC#g" /usr/share/nginx/html/static/js/*.js

sed -i "s#%%CHGSTCID%%#$CLIENT_ID#g" /usr/share/nginx/html/static/js/*.js
sed -i "s#%%CHGSTSEC%%#$CLIENT_SECRETS#g" /usr/share/nginx/html/static/js/*.js

nginx -g 'daemon off;'
