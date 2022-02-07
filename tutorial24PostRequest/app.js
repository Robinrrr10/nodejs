var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
var urlencodedparser = bodyParser.urlencoded({extended: false});

app.get('/contact', function(req, res){
  console.log("all query params:" + req.query)
  console.log("all query param name:" + req.query.name)
  console.log("all query param age:" + req.query.age)
  res.render('contact', {user: req.query})
})

app.post('/create', urlencodedparser, function(req, res){
  console.log("user is:" + req.body.usr);
  console.log("user age is:" + req.body.ag);
  console.log("user email is:" + req.body.em);
  res.render('userCreateSuccess', {data : req.body})
})

app.listen(3000)
