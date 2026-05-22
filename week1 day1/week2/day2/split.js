let str = "fly me to the moon";

// 1. Split the string into an array of wordsnode 
let words = str.trim().split(" ");

// 2. Find the last word
let lastword = words[words.length - 1];

// 3. Calculate the length of the last word
let length = lastword.length;

console.log(lastword); 
console.log(length);   