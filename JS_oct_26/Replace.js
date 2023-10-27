let num=1234//2--> 7
//1000+200+30+4
let remainder
let digit=0
let convert=1
while (num!=0) {
    remainder=num%10
    num=num/10
    num=parseInt(num,10)
    if(remainder==2) remainder=7
    digit=digit+remainder*convert
    convert*=10
}
console.log(digit)
