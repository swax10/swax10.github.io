#!/bin/bash
mkdir /var/log/ngrok && chmod -R +x /var/log
mkdir /root/.ngrok2 && chmod -R +x /root/.ngrok2
mkdir /temp_docker && chmod -R +x /temp_docker && cd /temp_docker
wget https://raw.githubusercontent.com/akhomy/alpine-ngrok/master/ngrok.yml
mv ngrok.yml /root/.ngrok2/
wget https://raw.githubusercontent.com/akhomy/alpine-ngrok/master/ngrok-stable-linux-386.zip
mv ngrok-stable-linux-386.zip /temp_docker/ngrok-stable-linux-386.zip
cd /temp_docker && unzip /temp_docker/ngrok-stable-linux-386.zip
cp /temp_docker/ngrok /usr/local/bin/
chmod +x /usr/local/bin/ngrok
rm -rf /temp_docker