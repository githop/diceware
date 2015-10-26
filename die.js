/**
 *
 * Created by githop on 10/25/15.
 */

function Die(sides) {
  this.sides = sides || 6;
}

//returns random number between 1 - 6 (or input die size)
Die.prototype.roll = function() {
  return 1 + Math.floor(Math.random() * this.sides);
};

//returns string, will 'roll die' n times and
//return results
Die.prototype.rolls = function(n) {
  var rls = [];
  for (var i = 0; i < n; i++) {
    rls.push(this.roll());
  }
  return rls.join('');
};

//returns 2d array, params (times, rollsCount)
//returns array of length n, of die rolled p times
Die.prototype.times = function(n, p) {
  if (p === undefined) {
    p = 5;
  }
  var times = [];
  for (var i = 0; i < n; i++) {
    times.push(this.rolls(p))
  }
  return times;
};

module.exports = Die;


