//This is a function which compares two inputs and evaluates whether they are the same
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  count = {};
  for (const letters of sentence) {
    if (letters != ' ') {
      if (count[letters]) {
        count[letters] += 1;
      } else {
        count[letters] = 1;
      }
    }
  }
  return count;
};

const text = "Hello my name is rhys";
// console.log(countLetters("Hello my name is rhys"));
const result1 = countLetters(text);
assertEqual(result1["H"], 1);
// console.log(result1);