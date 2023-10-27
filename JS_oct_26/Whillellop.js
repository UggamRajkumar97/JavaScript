let num=1234
let remainder
let sum=0

while (num!=0) {
    remainder=num%10
    num=num/10
    num=parseInt(num,10)
    sum=sum+remainder
}
console.log("sum--> "+sum)