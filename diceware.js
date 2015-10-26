var dict = require('./wordsHandler');
var Dice = require('./die');

function fiveLenPass() {
  var Die = new Dice();
  var pw = [];
  //the dict is a JS object where the key is a five digit int
  //and the val is the word
  //To get a word from the dict, roll a 6 sided dice 5 times
  //to generate a key to fetch the word with.
  Die.times(5).forEach(function(n) {
    pw.push(dict[n]);
  });
  return pw.join(' ');
}

console.log(fiveLenPass());
