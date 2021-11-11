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


const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      finalArray = finalArray.concat(flatten(array[i]));
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
};

// console.log(flatten([1, [2], [3, [[4]]]]));
// assertArrayEqual(flatten([1, [2], [3, [[4]]]]), [1, 2, 3, 4 ]);
