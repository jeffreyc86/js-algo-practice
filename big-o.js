console.log("Big O");

// Big O notation allows us to talk formally about how the runtime of an algorithm grows as the input grows

// Constant time = O(1)
// Linear time = O(n)
// Quadratic time = O(n^2)

// Space complexity - aka Auxillary Space Complexity
// refers to the space required by the algorithm - what the reprecussions are within the algorithm as n grows

// booleans, numbers, undefined, null  - constant space
// strings required O(n) space (where n is the length of the string)
// reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// LOGARITHMS
// log⌄2(8) = 3     2^3 = 8
// the logarithm of a number roughly measures the number of times you can divide that number by 2, before you get a value that's LESS THAN OR EQUAL TO ONE
// most commonly used in searching algorithms, efficient sorting algorithms, and recursion algorithms

// OBJECTS
// Objects are unordered key, value pairs

// Big O of Objects
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(1)

// Big O of Object Methods
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n) - creates array of arrays with key as the first element, value as the second element
// .hasOwnProperty - O(1)

// ARRAYS
// ordered lists
// used when you need order

// Big O of Arrays
// access - O(1)
// searching - O(n)
// insertion - it depends...
// removal - it depends...

// inserting and removing at beginning of the array is O(n)
// push() & pop() is O(1)
// shift() & unshift is O(n) - need to reassign the indices

// Big O of Array Methods
// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(n * logN)
// forEach - O(n)
// map - O(n)
// filter, reduce, etc - O(n)
