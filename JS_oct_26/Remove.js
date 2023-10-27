let num=12345

let replacedNum=0
let convert=1
while(num!=0){
    remainder=num%10
    num= parseInt(num/10)
    if(remainder==3); 
    else{
        replacedNum+=remainder*convert
        convert*=10
    }

}
console.log(replacedNum)