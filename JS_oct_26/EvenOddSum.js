let num=1234
let evenSum=0
let oddSum=0
let remainder
while (num!=0) {
    remainder=num%10
    num=num/10
    num=parseInt(num)
    if(remainder%2==0){
        evenSum+=remainder
    }
    else{
        oddSum+=remainder
    }
}
console.log("evenSum-->"+evenSum)
console.log("oddSum-->"+oddSum)