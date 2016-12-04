import uniqueRandomArray from 'unique-random-array';
import planetNames from './planets.json';

let getRandomPlanet = uniqueRandomArray(planetNames);

/**
 * Planet Name main
 * @type {Object}
 */
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
