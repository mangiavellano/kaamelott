var express = require('express');
var app     = express();

app.use('/assets', express.static(__dirname + '/dist/assets'));

app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
