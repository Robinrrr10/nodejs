//normal function
function printHi(){
  console.log("hiii");
}

printHi();


//function expression
var hello = function(){
  console.log("helloooo");
}

hello();

function myfunctionDa(funcName){
  funcName();
}
var pen = function(){
  console.log("pennn");
}

myfunctionDa(pen);
