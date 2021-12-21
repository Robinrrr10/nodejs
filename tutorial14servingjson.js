var http = require('http');

var server = http.createServer(function(req, res){
  console.log("called this");
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ram',
    dept: 'cse',
    age: 28
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1')
console.log("listening to port 3000...")
