#!/bin/sh

if [ -d "./node_modules/.bin/" ] 
then
    ./node_modules/.bin/envsub ./public/env.template.js ./public/env.js
else
    envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js
fi


