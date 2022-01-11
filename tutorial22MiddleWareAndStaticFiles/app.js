var express = require('express')

var app = express();

app.set('view engine', 'ejs')

app.use('/mystyles', express.static('myfiles')) //Here /allstatys we are poing to folder myfiles

//app.use('/mypath', function(req, res, next){  //Whatever end point start with /mypath, here it will come and then move next matching one
  //console.log("comming here when path start with given as above. then rest of the end point is:" + req.url)
  //next(); //Then search of next matching one
//});
//above is the middle ware
app.get('/mypath/hey', function(req, res){
  res.send('middle ware')
})

app.get('/', function(req, res){
  res.render('home')
})

app.get('/contact', function(req, res){
  res.render('contact')
})

app.listen(3000)
