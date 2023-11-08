let a=200
let b=100
let c=300

if(a>b){
    max=a
    min=b
}else{
    max=b
    min=a
}
if(c>max){ max=c}
if(c<min){ min=c}

console.log("max--> "+max)
console.log("min--> "+min)
