//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
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
  } else {
    for (const keys of obj1key) { //looping individual keys of object 1
      if (obj2key.includes(keys) === false) { //if object 2 includes the keys
        for (const val of obj1val) { //loop the values of object 1
          if (obj2val.includes(val) === false) { //if object
            return false;
          } else {
            continue;
          }
        }
      } else {
        return false;
      }
    }
  }
  return true
};

const players = {
  name: "rhys",
  state: "vancouver",
}

const players2 = {
  name: "rhys",
  state: "van",
}

console.log(eqObjects(players, players2));
