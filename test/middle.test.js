const middle = require('../middle');
const assert = require('chai').assert;
const assertArrayEqual = require('../assertArraysEqual');

describe("Middle Test", () => {
  it("shoudl return the middle two values of an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

  it("should return the middle value only of an odd number of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
});