const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const players = {
  name: "rhys",
  state: "vancouver",
};

const players2 = {
  name: "rhys",
  state: "vancouver",
  name2: "rice"
};

assertObjectsEqual(players, players2);





