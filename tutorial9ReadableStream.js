var fs = require('fs')
var file = __dirname + '/tutorial9SampleFile1.txt'
var myReadStream = fs.createReadStream(file, 'utf8'); //this is used to create read stream //Here we given file name and format

myReadStream.on('data', function(chunk){     //data event will used to read in part by part
  console.log("READING EACH CHUNK::::::::::::::::::::::::::::::");
  console.log(chunk);
});
