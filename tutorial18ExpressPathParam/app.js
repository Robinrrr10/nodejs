var express = require('express')

var app = express()

app.get('/user/:id', function(req, res){ //:id is the path param
  res.send("id given in end point is:" + req.params.id) //it is access by req.params.id
})

app.listen(3000)
