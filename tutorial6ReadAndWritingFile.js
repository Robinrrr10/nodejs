var fs = require('fs') //fs is node js inbuild package which is used for file operation like reading and writing

var strs = fs.readFileSync('tutorial6SampleFile4.txt', 'utf8'); //This is used to  read the file. Given filename and its format to return// It will read as binary. as utf is used it will return as text
//above is sync operation. so it will wait until it reads
console.log(strs);

var mystr = "this is my content to write da";
fs.writeFileSync('tutorial6SampleFile5.txt', mystr); // this is used to write content to  file. passed file name and content
//above is sync operation. so it will wait until it writes the file


//Below has async operation
console.log("Async::");

fs.readFile('tutorial6SampleFile4.txt', 'utf8', function(err, data){ //this is used to read. but this is async, it wont wait, it will just move to next line even though reading is in progress
  console.log("reading completed:" + data); //in above we have given file name, format and callback function
})

console.log("Reading is above. but still this line is executed as this async")

fs.writeFile('tutorial6SampleFile6.txt', mystr, function(){ //This used to write the file. This is async. so wont wait, even this is in progress, it will move to next line
  console.log("writing completed:") //in above we have given file name, content and callback function
});

console.log("Writing is above. but still this line is executed as this async")
