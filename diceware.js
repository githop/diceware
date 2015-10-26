var dict = require('./wordsHandler');
var dieGen = require('./die');
var arg = process.argv[2];
var generateDicewareNums = dieGen();

//uses Die and dict modules to simulate
//the process of using diceware to generate passwords
//accepts 3 params, phrase len, handler function (return array is passed to reduce), and dictionary list.
//returns string of words
function generatePassPhraseFrom(pwLen, fn, wordsMap) {
  if (pwLen == undefined) pwLen = 5;
  var input = parseInt(pwLen, 0);

  if (isNaN(input)) {
    console.log('First Param must be a Number!\n\nUsing default (5) word password length.\n');
    input = 5;
  }
  return fn(input).reduce(function(pw, current) {
    var word = ' ' + wordsMap[current] + ' ';
    return pw +=  word;
  }, '');
}

var getPassPhrase = generatePassPhraseFrom(arg, generateDicewareNums, dict);

console.log(getPassPhrase);
