//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key in obj){
    if (obj[key] === value){
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);