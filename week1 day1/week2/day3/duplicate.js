let num = [56,78,90,23,90,76,43,56]

let dup =[];
for(let i=0;i<num.length;i++){
    for(let j= i+1;j<num.length;j++){
        if(num[i]===num[j] && !dup.includes(num[i])){
            dup.push(num[i]);

        }
    }
}
console.log("Duplicate elements are:",dup)
