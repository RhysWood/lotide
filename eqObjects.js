const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1key = Object.keys(object1);
  const obj2key = Object.keys(object2);
  const obj1val = Object.values(object1);
  const obj2val = Object.values(object2);
  if (obj1key.length !== obj2key.length) {
    return false;
  }
  if (eqArrays(obj1key, obj2key) === false) {
    return false;
  }
  for (const val of obj1val) {
    if (obj2val.includes(val) === false) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;