const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
//Driver Code:
// const players = {
//   name: "rhys",
//   state: "vancouver",
// };

// const players2 = {
//   name: "rhys",
//   state: "vancouver",
// };

// assertEqual(eqObjects(players, players2), true);
