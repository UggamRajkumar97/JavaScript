let num=1236575
let max=0
let min=9
let remainder
while (num!=0) {
    remainder=num%10
    num=num/10
    num=parseInt(num)
    if(remainder>max){
        max=remainder
    }
    if(remainder<min){
        min=remainder
    }
}
console.log("Max-->"+max)
console.log("Min-->"+min)