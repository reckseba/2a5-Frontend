const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Certificate
const privateKey = fs.readFileSync(`ssl/privkey.pem`, 'utf8');
const certificate = fs.readFileSync(`ssl/cert.pem`, 'utf8');
const ca = fs.readFileSync(`ssl/chain.pem`, 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const filter = function (pathname, req) {
	const regex = /^\/[A-Za-z0-9]{3,5}/gm;
	return pathname.match(regex) && pathname.length >= (3+1) && pathname.length <= (5+1) && req.method === 'GET';
};

app.use(
	'/newUrlLong',
	createProxyMiddleware({
		target: 'https://2a5.de:5000',
		changeOrigin: true
	})
);

app.use(
	'/*',
	createProxyMiddleware(filter, {
		target: 'https://2a5.de:5000',
		changeOrigin: true
	})
);


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log(`HTTPS Prod-Server running on port 443`);
});


