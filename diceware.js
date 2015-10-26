var dict = require('./wordsHandler');
var Die = require('./die')();
var arg = process.argv[2];

//uses Die and dict modules to simulate
//the process of using diceware to generate passwords
//accepts num param to set length of generated pw.
function generatePassPhrase(len) {
  var pw = [];

  if (len == undefined) len = 5;
  var input = parseInt(len, 0);

  if (isNaN(input)) {
    console.log('First Param must be a Number!\n\nUsing default (5) word password length.\n');
    input = 5;
  }

  Die.generateDicewareNums(input).forEach(function(n) {
    pw.push(dict[n]);
  });

  return pw.join(' ');
}

console.log(generatePassPhrase(arg));
