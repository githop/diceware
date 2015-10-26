/**
 *
 * Created by githop on 10/25/15.
 */

//who needs prototypes anyway?
var Die = function(sides) {
  var _sides = sides || 6;

  //'rolls' a die one time
  //returns int range 1-6 (or input side length)

  function _roll() {
    return 1 + Math.floor(Math.random() * _sides);
  }

  //'rolls' a single die n times,
  //returns results of each roll as single string
  //e.g. rolls(3) => '243';

  function _rolls(n) {
    var rls = [];
    for (var i = 0; i < n; i++) {
      rls.push(_roll());
    }
    return rls.join('');
  }

  //returns an array of 'rolls'
  //first param - phrase length
  //second param - rolls count
  //used to naively generate id strings to match words from the diceware dictionary
  //e.g. generateDicewareNums(2) => ['34253', '22431']

  function generateDicewareNums(n, p) {
    if (p == undefined) p = 5;
    if (n == undefined) n = 5;

    var t = [];
    for (var i = 0; i < n; i++) {
      t.push(_rolls(p));
    }
    return t;
  }

  return generateDicewareNums;


};

module.exports = Die;
