
/*  Input: arr[] = {4, 3, 6, 2, 1}  
    output 5
    Hint: 1+2+3+4+6 
*/

let num = [4, 3, 6, 2, 1]
let min = num[0]
let max = num[0]
let actualSum =0
for(let i=0;i<num.length;i++){
    if(num[i] > max) max = num[i]
    if(num[i] < min) min = num[i]
    actualSum = actualSum +num[i]
}
let sum = 0;
for(let k=min;k<=max;k++){
    sum = sum + k;
}
console.log("missing num-->"+(sum - actualSum))