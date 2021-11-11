const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;

//Driver Code:
// const words = ["the", "salted", "pork", "is", "particularly", "good"];
// const num = [1, 2, 3, 4, 5];
// const results1 = map(words, word => word[0]);
// const results2 = map(num, num => num * 2);
// const results3 = map(num, num => num * 3);
// assertArrayEqual(results1, [ 't', 's', 'p', 'i', 'p', 'g' ])
// assertArrayEqual(results2, [ 2, 4, 6, 8, 10 ]);
// assertArrayEqual(results3, [ 3, 6, 9, 12, 15 ]);