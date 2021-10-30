//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i =0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
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
  } else if (eqArrays(obj1key, obj2key) === false){
        return false;
      } else {
        for (const val of obj1val) {
          if (obj2val.includes(val) === false) {
            return false;
          } else {
            continue;
          }
        }
    }
  return true;
}

const players = {
  name: "rhys",
  state: "vancouver",
}

const players2 = {
  name: "rhys",
  state: "vancouver",
}

console.log(assertEqual(eqObjects(players, players2), true));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
