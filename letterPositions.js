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
}


const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' '){
      if (results[sentence[i]]){ //if the letter in the sentence exists in the results object
        results[sentence[i]].push(i); // adding the index number to the current array 
      } else {
        results[sentence[i]] = [i]; //creating an array with the first index number
      }
    }
  }
  return results;
};
// console.log(letterPositions("Lighthouse Labs"));
assertArrayEqual(letterPositions("hello").h, [0]);
