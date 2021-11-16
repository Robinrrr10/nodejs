var events = require('events');
var util = require('util'); //util has different utils as like inherits etc

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter) //inherit is used to inherit. Here i inherited EventEmitter to use in Person

var ram = new Person('Ram')
var raja = new Person('Raja')
var babu = new Person('babu')

var allPeople = [ram, raja, babu]

allPeople.forEach(function(eachPer){
  eachPer.on('speak', function(msg){ //as i already inherited EventEmitter, i can use on function here// Here i created speak action with an function which takes message
    console.log(eachPer.name + " said: " + msg);
  })
});

ram.emit('speak', 'hello') //Using emit i called speak action // as i used for all object in array, speak will work for all obj in array
raja.emit('speak', 'hi man')
babu.emit('speak', 'my message da')
