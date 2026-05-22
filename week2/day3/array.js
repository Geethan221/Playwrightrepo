let arr = ["A","B","C"];
console.log("Initial Array:",arr);
// push()
arr.push("D");
// Display the array
console.log("Push:", arr);
// pop()
arr.pop();
console.log("Pop:", arr);
//unshift()
arr.unshift("Z");
console.log("unshift:", arr);
//shift()
arr.shift();
console.log("shift:", arr);
//indexof()
let index = arr.indexOf("B");
console.log("Index of B:",index);
//includes()
let isPresent = arr.includes("C");
console.log("Is C present?",isPresent);
//join
let joinedString = arr.join("-");
console.log("Joined String:",joinedString);
//reverse()
arr.reverse();
console.log("Reversed Array:",arr);
//sort()
arr.sort();
console.log("Sorted Array:",arr);
