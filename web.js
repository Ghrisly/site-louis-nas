var gzippo = require('gzippo');
var express = require('express');

var cool = require('cool-ascii-faces')





var port = process.env.PORT || 5000;
var app = express();
 
app.use(express.logger());
app.get('/', function(request, response) {
  response.send(cool());
});

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(port, function() {
  console.log("Listening on " + port);
});