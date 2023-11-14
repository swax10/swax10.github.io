#!/bin/bash
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar -xvzf ngrok-v3-stable-linux-amd64.tgz
sudo cp ngrok /usr/local/cd/bin/
chmod +x /usr/local/bin/ngrok
echo "THE END"