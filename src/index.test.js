var planetName = require('./index');
var expect = require('chai').expect;

describe('planetName', function() {
  describe('all', function() {
    it('should be an array of string', function() {
      expect(planetName.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }

    });
    it('should contain Earth', function() {
      expect(planetName.all).to.contain('Earth');

    });
  });
  describe('random', function() {
    it('should return a random planet from planetName.all', function() {
      var randomPlanet = planetName.random();
      expect(planetName.all).to.include(randomPlanet);
    });
    it('should return an array of random planet if passed a number', function() {
      var randomPlanets = planetName.random(3);
      expect(randomPlanets).to.have.length(3);
      randomPlanets.forEach(function(planet) {
        expect(planetName.all).to.include(planet);
      });
    });

  });
});
