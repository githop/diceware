var dict = require('./wordsHandler');
var Die = require('./die');
var arg = process.argv[2];
var DICE = new Die();

(arg == undefined) ? arg = 5 : arg;

function generatePassPhrase(len) {
  var pw = [];
  //the dict is a JS object where the key is a five digit int
  //and the val is the word
  //To get a word from the dict, roll a 6 sided dice 5 times
  //to generate a key to fetch the word with.
  var input = parseInt(len, 0);
  if (isNaN(input)) {
    console.log('First Param must be a Number!\n\nUsing default (5) password length.\n');
    input = 5;
  }
  DICE.times(input).forEach(function(n) {
    pw.push(dict[n]);
  });
  return pw.join(' ');å
}

console.log(generatePassPhrase(arg));
