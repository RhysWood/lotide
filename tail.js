//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`;
  }
};

//This function chops the head off of the array by looping from index [1]
const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

// Test Case
const arrStrings = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(arrStrings));
console.log(assertEqual(arrStrings.length, 3)); // original array length should not change (3)