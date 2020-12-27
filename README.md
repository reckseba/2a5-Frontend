# 2a5 Frontend

git clone  
mkdir ssl and put chain.pem cert.pem privkey.pem there and chmod 600  

## Run test env
npm run start

## Run prod env
node server.js

opens a server on port 8000. If you want to make your serveice available on port 443 to make it more convenient you need to redirect everything on port 8000 to port 443:
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000 (as root)
iptables -t nat --line-numbers -n -L (to list what you have done)

forever start server.js

npm run build  
