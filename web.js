var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
 var buf = new Buffer(fs.readFileSync("index.html"),'utf-8');
 response.send(buf.toString());
});

app.get('/about', function(request, response) {
 var buf = new Buffer(fs.readFileSync("about.html"),'utf-8');
 response.send(buf.toString());
});

app.get('/charts', function(request, response) {
 var buf = new Buffer(fs.readFileSync("charts.html"),'utf-8');
 response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
