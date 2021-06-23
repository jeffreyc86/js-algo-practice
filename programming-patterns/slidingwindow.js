// write a function which accepts and array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array

const maxSubarrySum = (arr, n) => {

  // check if arr is of n size, if not return null
  // initialize a max sum with the first n elements
  // loop through the array and create a sliding window of size n
  // to see if the sum of the sliding window is larger than the current max sum
  // if it is rewrite max sum to be the current sum

  if (arr.length < n) {
    return null
  }

  let maxSum = arr.slice(0, n).reduce((a, b) => a + b, 0)
  let tempSum = maxSum
  
  for (i = 1, j = n; i < arr.length - n, j < arr.length; i++, j++) {
    tempSum = tempSum - arr[i - 1] + arr[j];
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log(maxSubarrySum([-3, 4, 0, -2, 6, -1], 2))