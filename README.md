
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rhyswood/lotide`

**Require it:**

`const _ = require('@rhyswood/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(arr1, arr2)`: Takes in two arrays and compares whether they are the same. 
* `assertEqual(actual, expected)`: Compares whether an output is what is expected.
* `assertObjectsEqual(actual, expected)`: Compares whether an object is equal to an expected object.
* `countLetters(sentence)`: takes a sentence (as a string) and returns a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: Takes an array of strings and returns counts for a specified subset.
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey(obj, cb)`: Scans an object and returns the first key for which the callback returns a truthy value.
* `findKeyValue(obj, value)`: Scans an object and returns the first key which contains the given value.
* `flatten(array)`: Given an array with other arrays inside, it will flatten it into a single-level array.
* `head(array)`: Returns the first element of an array.
* `letterPositions(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(arr, cb)`: Applies the callback function to each element in the given array and returns a new array based on the results of the callback function.
* `middle(array)`: Returns an array with only the middle element(s) of the provided array. With an even number of elements, an array containing the two elements in the middle is returned.
* `tail(array)`: Returns an array without the first element of the given array.
* `takeUntil(array, cb)`: Returns a slice of the array with elements taken from the beginning. It goes until the callback/predicate returns a truthy value.
* `without(source, itemsToRemove)`: Return a new array with only those elements from source that are not present in the itemsToRemove array.


