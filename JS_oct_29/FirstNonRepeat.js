let num=[-1, 2, -1, 3, 0]
for(let i=0;i<num.length;i++){
    let count=0
    for(let j=0;j<num.length;j++){
        if(num[i]==num[j]) count++
    }
    if(count==1){
        console.log(num[i])
        break
    } 

}