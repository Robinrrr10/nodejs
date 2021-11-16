var events = require('events'); //event is inbuild module in NodeJs

var myEmitter = new events.EventEmitter(); //EventEmitter is used to create new event

myEmitter.on('perform', function(message){ //here 'perform' action is created one function using on
  console.log(message)
})

myEmitter.emit('perform', 'do something here') //Here perform action is called with another param which will be used
