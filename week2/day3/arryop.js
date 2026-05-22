let data = ["chrome",true,132.8];

console.log("Original Array is : ", data);

//Add "Webkit"

data[5] = "webkit";
console.log("After adding element in array at index 5: ", data);

//pop()

data.pop();
console.log("After pop():" , data);

//push()
data.push("firefox");
console.log("After push('firefox'):", data);

//shift()
data.shift();
console.log("After shift():",data);
