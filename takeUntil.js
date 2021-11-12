const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

const takeUntil = ((array, cb) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArr = array.slice(0, array.indexOf(array[i]));
    }
  }
  return newArr;
});

module.exports = takeUntil;