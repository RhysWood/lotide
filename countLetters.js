//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  count = {};
  for (const letters of sentence) {
    if (letters != ' ') {
      if (count[letters]) {
        count[letters] += 1;
      } else {
        count[letters] = 1;
      }
    }
  }
  return count;
};

module.exports = countLetters;