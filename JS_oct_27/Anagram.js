
let num1=6835
let num2=3856

let temp1=num1
let temp2=num2

let newNum1=0
let p1=1
for(let i=0;i<=9;i++){
    while(num1!=0){
        let remainder1=num1%10
        num1=num1/10|0
        if(remainder1==i){
            newNum1=newNum1+ remainder1*p1
            p1=p1*10
        }
    }
    num1=temp1
}

let newNum2=0
let p2=1
for(let i=0;i<=9;i++){
    while(num2!=0){
        let remainder2=num2%10
        num2=num2/10|0
        if(remainder2==i){
            newNum2=newNum2+ remainder2*p2
            p2=p2*10
        }
    }
    num2=temp2
}

console.log(newNum1)
console.log(newNum2)
if(newNum1==newNum2){
    console.log("Given two numbers are Anagram")
}
else{
    console.log("Given two numbers are NOT Anagram")
}