let num=123
let remainder
let sum=0
let count=0
while (num!=0) {
    count=count+1
    remainder=num%10
    num=num/10
    num=parseInt(num)
    sum=sum+remainder
}
console.log(sum)
console.log(count)