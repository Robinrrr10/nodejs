var count = function(arr){
  return 'Size is: ' + arr.length;
}

var add = function(a, b) {
  return `addition : ${a+b}`
}

var name = "Raja";

module.exports = {
  count: count,
  addition: add,
  customer: name
}
