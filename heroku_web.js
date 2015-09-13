var express = require('express');
var server  = express();

server.use('/assets', express.static(__dirname + '/dist/assets'));
server.use('/favicon.ico', express.static(__dirname + '/dist/favicon.ico'));

server.all('/*', function(req, res) {
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  res.sendFile(__dirname + '/dist/index.html');
});

server.listen(process.env.PORT || 5000);
