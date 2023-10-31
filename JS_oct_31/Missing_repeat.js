let num=[4, 3, 6, 2, 1, 1]

let numSum=0
let min=num[0]
let max=num[0]
let duplicate=[]
let repeatedNum=0
for(let i=0;i<num.length;i++){
    if(num[i]>max) max=num[i]
    if(num[i]<min) min=num[i]
    numSum=numSum+num[i];
    for(let k=0;k<duplicate.length;k++){
        if(duplicate[k]==num[i]) repeatedNum=num[i]
    }
    duplicate[i]=num[i]
}

numSum=numSum-repeatedNum
let actualSum=0

for(let j=min;j<=max;j++){
    actualSum+=j
}
console.log("Repeated Number is : "+repeatedNum)
console.log("Mising Number is : "+(actualSum-numSum))
// console.log(duplicate)