const eqArrays = function (arr1, arr2) {
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


const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["the", "salted", "pork", "is", "particularly", "good"];
const num = [1, 2, 3, 4, 5];
const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
}
const results1 = map(words, word => word[0]); 
const results2 = map(num, num => num * 2);
const results3 = map(num, num => num * 3);

// assertArrayEqual(results1, [ 't', 's', 'p', 'i', 'p', 'g' ])
// assertArrayEqual(results2, [ 2, 4, 6, 8, 10 ]);
// assertArrayEqual(results3, [ 3, 6, 9, 12, 15 ]);