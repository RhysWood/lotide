//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;

