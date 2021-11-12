const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) { //if the letter in the sentence exists in the results object
        results[sentence[i]].push(i); // adding the index number to the current array
      } else {
        results[sentence[i]] = [i]; //creating an array with the first index number
      }
    }
  }
  return results;
};

module.exports = letterPositions;