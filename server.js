var express = require('express');
var app     = express();

app.use('/assets', express.static(__dirname + '/dist/assets'));
// server.use('/favicon.ico', express.static(__dirname + '/dist/favicon.ico'));

app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
