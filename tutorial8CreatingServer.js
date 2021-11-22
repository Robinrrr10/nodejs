var http = require('http')

var server = http.createServer(function(req, res){
  console.log("End point called:" + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hi man");
});

server.listen(3000, '127.0.0.1');
console.log('Listening port 3000');
