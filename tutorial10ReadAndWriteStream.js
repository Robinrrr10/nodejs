var fs = require('fs')
var readStrm = fs.createReadStream(__dirname + '/tutorial10SampleFile1.txt', 'utf8'); //used to create read stream //given name which wanted to read part by part. and also given forma

var writeStrm = fs.createWriteStream(__dirname + '/tutorial10SampleFile2.txt'); //Give file name which we wanted to write part by part
var count = 1;
readStrm.on('data', function(chunk){ //data event will get data part by part and each time each part will be send to chunk
  console.log("chunk::::::::" + count);
  writeStrm.write(chunk); //This will write part by part. This will write chunk
  count++;
})
