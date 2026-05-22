function isAnagram(str1, str2) {
  // 1. Remove spaces and convert all letters to the same case
  let s1 = str1.toLowerCase().split("").join("");
  let s2 = str2.toLowerCase().split("").join("");

  // 2. Sort the characters
  let sorted1 = s1.split("").sort().join("");
  let sorted2 = s2.split("").sort().join("");

  // 3. Compare sorted strings
  let result = sorted1 === sorted2;

  // 4. Return the result
  return result;
}

// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false