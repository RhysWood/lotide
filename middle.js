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
/*
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the 
middle should be returned
*/

//FIRST TRY
const middle = function(arr) {
  let finalArray = [];
  let midOdd = Math.floor(arr.length / 2);
  let mid = arr.length / 2;
  let evenMid = mid - 1;
  if (arr.length % 2 === 0 && arr.length > 2){
    let newItems = [arr[evenMid], arr[mid]]
    finalArray.push(...newItems);
  } else if (arr.length > 2) {
    finalArray.push(arr[midOdd]);
  }
  return finalArray;
}

//SECOND TRY
// const middle = function(arr) {
//   let finalArray = [];
//   let index;
//   if(arr.length % 2 === 0 && arr.length > 2){ //means that the number of elements in the Array is even and more than 2
//     index = arr.length / 2;
//     finalArray = [arr[index-1], arr[index]];
//     return finalArray;
//   } else if (arr.length > 2){
//     //Number of elements in the Array is Odd
//     index = Math.floor(arr.length / 2) 
//     finalArray = arr[index+1];
//     return finalArray;
//   }
//   return finalArray
// }

// console.log(middle([1, 2]))
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]))

