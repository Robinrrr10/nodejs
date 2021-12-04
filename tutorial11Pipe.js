var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/tutorial11SampleFile1.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/tutorial11SampleFile2.txt');

readStream.pipe(writeStream); //This will write the data part by part
