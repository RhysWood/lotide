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

module.exports = middle;


