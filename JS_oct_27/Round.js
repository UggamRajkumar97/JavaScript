
function round(num,decimal){
    powerOfDecimal=1
    for(let i=1;i<=decimal+1;i++){
        powerOfDecimal*=10
    }
    let myNumber=(num*powerOfDecimal)|0
    let last=myNumber%10
    myNumber=(myNumber/10) | 0
    if(last>5) myNumber+=1
    powerOfDecimal=powerOfDecimal/10
    myNumber=myNumber/powerOfDecimal
    return myNumber
}
let res=round(12.2876,2)
console.log(res)