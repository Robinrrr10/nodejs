var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var readStr = fs.createReadStream(__dirname + '/tutorial12SampleFile1.txt', 'utf8');
  readStr.pipe(res); //This will send the data to client part by part
});

server.listen(3000, '127.0.0.1');
console.log('Server started');
console.log('Listening to port 3000.......');
