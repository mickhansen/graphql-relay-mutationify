var assert = require('assert');
var mutationify = require('../src/mutationify');
var util = require('util');

describe('mutationify', function () {
  var testInput = function (input, expectation) {
    it(util.inspect(input), function () {
      assert(mutationify(input) === expectation, `Expected ${mutationify(input)} to produce ${expectation}`);
    });
  };

  testInput({
    firstName: 'Mick',
    lastName: 'Hansen',
    count: 30
  }, `{firstName: "Mick", lastName: "Hansen", count: 30}`)

  testInput({
    users: [{
    firstName: 'Mick',
    lastName: 'Hansen',
    count: 30
    }]
  }, `{users: [{firstName: "Mick", lastName: "Hansen", count: 30}]}`)

  testInput({
    user: {
    firstName: 'Mick',
    lastName: 'Hansen',
    count: 30
    }
  }, `{user: {firstName: "Mick", lastName: "Hansen", count: 30}}`)

  const date = new Date(2017, 7, 3, 1, 42);
  testInput({
    date
  }, `{date: "${date.toString()}"}`)
});
