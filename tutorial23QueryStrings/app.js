var express = require('express')
var app = express();
app.set('view engine', 'ejs');

app.get('/contact', function(req, res){
  console.log("all query params are: ", req.query) //to  get all query params
  console.log("query params name: ", req.query.name) //to get only one query param name value
  console.log("query params age: ", req.query.age) //to get only one query param age value
  res.render('contact', {user: req.query});
})

app.listen(3000);
