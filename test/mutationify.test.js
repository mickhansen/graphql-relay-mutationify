var assert = require('assert');
var mutationify = require('../src/mutationify');
var util = require('util');

describe('mutationify', function () {
  var testInput = function (input, expectation) {
    it(util.inspect(input), function () {
      assert(mutationify(input) === expectation);
    });
  };

  testInput({
    firstName: 'Mick',
    lastName: 'Hansen',
    count: 30
  }, `{firstName: "Mick", lastName: "Hansen", count: 30}`)
});
