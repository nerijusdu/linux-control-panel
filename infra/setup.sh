#!/bin/sh

echo "-------------- Build client --------------------------------------------------"
cd /var/www/lcp/client
npm install --only=prod
npm run build

echo "-------------- Build server --------------------------------------------------"
cd /var/www/lcp/server
npm install --only=prod
npm run build

# Add execution permissions
echo "-------------- Add execution permissions -------------------------------------"
chmod +x /var/www/lcp/server/build/server/server.js

# Copy client app to be served as static files from server
echo "-------------- Copy client app to be served as static files from server ------"
cd ..
cp -a /var/www/lcp/client/build/. /var/www/lcp/server/public/

echo "-------------- Setup as a service --------------------------------------------"
cp /var/www/lcp/infra/lcp.service /etc/systemd/system
systemctl start lcp
systemctl enable lcp

echo "-------------- Setup complete ------------------------------------------------"
