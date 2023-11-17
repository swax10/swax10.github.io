#!/bin/bash

apk update

apk add mongodb
apk add mongodb-tools

mkdir -p /data/db/
chown `root` /data/db

rc-update add mongodb default
rc-service mongodb start

mongo --version