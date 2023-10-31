
let num=[1, 1, 1, 2, 2,2,2];

let finalCount=0
let finalNum=0
let dup=[]
for(let i=0;i<num.length;i++){
    let isPresent=false 
    for(let k=0;k<dup.length;k++){
        if(dup[k]==num[i]) isPresent=true
    }
    if(isPresent==false){
        dup[i]=num[i]
        let count=0
        for(let j=i+1;j<num.length;j++){
            if(num[i]==num[j]){
                count++
            }
        }
        if(count>finalCount){
            finalCount=count
            finalNum=num[i]
        }
    }
}
finalCount=finalCount+1

console.log("Repeated Count--> "+finalCount)
console.log("Max Repeted number--> "+finalNum)

if(finalCount>num.length/2) console.log(true+" (Num appears more than n/2 times in the given array)")
else console.log(false+" (Num doesn't appears more than n/2 times in the given array)")
