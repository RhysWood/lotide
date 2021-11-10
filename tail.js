//This function chops the head off of the array by looping from index [1]
const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

module.exports = tail;