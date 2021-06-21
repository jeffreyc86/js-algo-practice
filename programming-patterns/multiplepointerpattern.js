// Write a function called sumZero which accepts a sorted array of integers. The function should return the first pair
// where the sum is 0.
// Return an array that includes both values that the sum to zero or undefined if pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([1, 2, 3]) // undefined

function sumZero(arr) {
  let left = 0
  let right = arr.length-1

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum > 0) {
      right--
    } else if (sum < 0) {
      left++
    } else {
      return [arr[left], arr[right]]
    }
  }

  return undefined
}
 
// console.log(sumZero([-2,-1,0,5,10]))

// implement a function called countUniqueValues which accepts a sorted array, and countes the unique values in the array
// there can be negative numbers in the array, but it will always be assorted

// const countUniqueValues = (arr) => {

//   let lookup = {}

//   for (ele of arr) {
//     lookup[ele] = lookup[ele]++ || 1
//   }

//   return Object.keys(lookup).length

// }

// const countUniqueValues = (arr) => {

//   if (arr.length === 0) {
//     return 0
//   }
  
//   let answer = 1
//   let prev = arr[0]
//   let i = 1

//   while (i < arr.length) {
//     if (arr[i] !== prev) {
//       answer++
//       prev = arr[i]
//     }
//     i++
//   }
  
//   return answer
// }

const countUniqueValues = (arr) => {

  if (arr.length === 0) {
    return 0
  }
  
  let i = 0
  for (j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }

  return i+1
}