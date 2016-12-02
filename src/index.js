var uniqueRandomArray = require('unique-random-array');
var planetNames = require('./planets.json');
var getRandomPlanet = uniqueRandomArray(planetNames);

module.exports = {
  all: planetNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomPlanet();
  } else {
    var _toReturn = [];
    for (var i = 0; i < number; i++) {
      _toReturn.push(getRandomPlanet());
    }
    return _toReturn;
  }
}
