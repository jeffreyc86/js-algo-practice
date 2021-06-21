// Given two strings, write a function to determine if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of another
// cinema is an anagram of iceman

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let obj1 = {};
//   let obj2 = {};

//   for (let char of str1) {
//     obj1[char] = obj1[char]++ || 1;
//   }

//   for (let char of str2) {
//     obj2[char] = obj2[char]++ || 1;
//   }

//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false;
//     }

//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let char in str1) {
    lookup[char] = lookup[char]++ || 1;
  }

  for (let char in str2) {
      if (!lookup[char]) {
          return false
      } else {
          lookup[char]--
      }
  }
    
  return true
}

console.log(isAnagram("textzx", "tezt"));
