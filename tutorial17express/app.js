var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Home page')
});

app.get('/contact', function(req, res){
  res.send('Contact page')
});

app.get('/about',function(req, res){
  res.send('About page')
});

app.listen(3000)
