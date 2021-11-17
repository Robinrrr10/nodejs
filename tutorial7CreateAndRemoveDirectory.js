var fs = require('fs');

fs.unlinkSync('tutorial7SampleFile7.txt'); //This is used to remove the file. If file not exists it will throw the error

fs.unlink('tutorial7SampleFile8.txt', operationDone);// this is asyc method to remove the file. once its done, it will call callback function function

function operationDone(msg){
  console.log("operation done");
}


fs.mkdirSync('tutorial7SampleDirectory1'); //used to create directory
fs.mkdir('tutorial7SampleDirectory2', operationDone); //used to create directory using async method. once done it will call given callback functionName
//if directory exists, then it will give the error

fs.writeFileSync('./tutorial7SampleDirectory1/tutorial7SampleFile9.txt', "This text will be adding the file");

fs.unlinkSync('./tutorial7SampleDirectory1/tutorial7SampleFile9.txt');

fs.rmdirSync('tutorial7SampleDirectory1'); //used to remove directory
fs.rmdir('tutorial7SampleDirectory2', operationDone); //used to remove directory using asycn function
//if directoy does not exits while removing it will give error
