const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

console.log(middle([1, 2]));
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);