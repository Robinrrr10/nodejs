var count = function(arr){
  return 'length is' + arr.length;
}

var add = function(a, b) {
  return `addition result is ${a+b}`
}

var name = "dinesh";

module.exports.count = count;
module.exports.addition = add;
module.exports.user = name;
