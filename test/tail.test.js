const assertEqual = require('../assertEqual');
const tail = require('../tail');


//This function chops the head off of the array by looping from index [1]

// Test Case
const arrStrings = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(arrStrings));
assertEqual(arrStrings.length, 3); // original array length should not change (3)