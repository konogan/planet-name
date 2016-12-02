var uniqueRandomArray = require('unique-random-array');
var planetNames = require('./planets.json');

module.exports = {
  all : planetNames,
  random : uniqueRandomArray(planetNames)
};