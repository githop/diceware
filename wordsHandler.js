var fs = require('fs');
var bufStr = fs.readFileSync('words.txt').toString();

//returns an object of k,v where key is the id of the word
//reads from text file to get data.
function processWords(words) {
  var WORDS = {};
  var lines = words.split(/\r?\n/);
  var i = 0,
    len = lines.length;
  for (i; i < len; i++) {
    var current = lines[i].split(/\s/);
    var k = parseInt(current[0]);
    WORDS[k] = current[1];
  }
  return WORDS;
}

var words = processWords(bufStr);

module.exports = words;
