const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let isToBeRemoved = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        isToBeRemoved = true;
      }
    }
    if (isToBeRemoved === false) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;

console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]));