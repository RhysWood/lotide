const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;

//Driver Code:

// assertArrayEqual(without([1, 2, 3], [1]), [2, 3])
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);