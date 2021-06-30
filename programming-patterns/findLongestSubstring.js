// write a function called findLongestSubstring, which accepts a string and returns the length of the longest continuous substring with
// all distinct characters

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // check if this character is within the dictionary
    // if so, check if it is before or after the current start
    // if after, change the start to the new starting point
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
    return longest;
}

console.log(findLongestSubstring("thecatinthehat"))
