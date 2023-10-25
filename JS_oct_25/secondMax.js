let a=60
let b=50
let c=40
let secondMax
if((a>b && a<c) || (a<b && a>c)){
    secondMax=a
}
else if((b>c && b<a) || (b<c && b>a)){
    secondMax=b
}
else {
    secondMax=c
}
console.log("secondMax--> "+secondMax)