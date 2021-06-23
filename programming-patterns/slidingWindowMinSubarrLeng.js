// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer target
// This function should return the minimal length of a continguous subarray of which the sum is greater than or equal to the target integer
// if there isn't one, return 0

// minSubArrayLen([2,3,1,2,4,3], 7)  // 2 => because [4,3] is the smallest subarray


function minSubArrayLen(nums, tar) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then move the window to right
    
    if (total < tar && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the window 
    else if (total >= tar) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // total is less than target but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
