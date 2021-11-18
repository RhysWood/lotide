const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1key = Object.keys(object1);
  const obj2key = Object.keys(object2);
  if (obj1key.length !== obj2key.length) {
    return false;
  }
  for (let key of obj1key) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null) {
      if (object1[key] && object2[key]) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;