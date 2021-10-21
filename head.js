//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`;
  }
};

//This function below returns the head of an array
const head = function(array) {
  return array[0];
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual((head([1, 2, 3])), 2));
console.log(head([]));
