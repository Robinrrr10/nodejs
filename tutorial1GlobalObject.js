console.log('hi') //console is one of global object

console.log(__dirname) //to show current directory
console.log(__filename) //To show current filename

setTimeout(function(){         //setTimeout is used to call a function after given millisec
  console.log('waited for 5 sec')
}, 5000)

setTimeout(myfunctionOne, 3000) //It will wait for 3 sec before calling myfunctionOne

function myfunctionOne(){
  console.log('hiiiiii')
}

let time = 0
let timer = setInterval(function(){ //this is used to call function in every given interval
  time += 4
  console.log(time, " sec passed")
  if(time > 20) {
    clearInterval(timer)
  }
}, 4000) //here given 4000 milli sec
