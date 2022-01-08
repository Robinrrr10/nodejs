var express = require('express')

var app = express();

app.set('view engine', 'ejs') //to add ejs   //Also add views folder and keep all ejs template file there

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.get('/about', function(req, res){
  res.send('about page')
})

app.get('/contact', function(req, res){
  res.sendFile(__dirname + "/contact.html")
})

app.get('/profile/:name', function(req, res){
  res.send('profile name is:' + req.params.name)
})

app.get('/profileUser/:name', function(req, res){
  var data = {age: 24, dept: 'cse', hobbies: ['foodball', 'singing', 'bike riding', 'Learning']};
  res.render('user', {username: req.params.name, userdata: data}) //user.ejs file is available inside views. so we have user      //Here we use render and pass param and objects //It will be used in html using username and userdata
})

app.listen(3000)
