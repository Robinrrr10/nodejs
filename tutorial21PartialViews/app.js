var express = require('express')

var app = express();

app.set('view engine', 'ejs') //to add ejs   //Also add views folder and keep all ejs template file there

app.get('/', function(req, res){
  res.render('home')
})

app.get('/contact', function(req, res){
  res.render('contact')
})

app.listen(3000)
