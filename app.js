//Using nodejs to create a simple server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//app to use the `bodyParser()` middleware for all routes
app.use(bodyParser());
//Sends the html file for the website
app.get('/', function (req, res) {
  res.sendfile('main.html');
});
//listens on http://localhost:3000
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
