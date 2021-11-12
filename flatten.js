const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      finalArray = finalArray.concat(flatten(array[i]));
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
};

module.exports = flatten;