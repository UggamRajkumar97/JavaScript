
let str="it is dificult to count welcome to Hyderabad"
let strSplit=str.split(" ")
let wordCount=0
let maxCount=0
let maxWord
for(let i=0;i<strSplit.length;i++){
    wordCount++
    let count=0
    for(let j=0;j<strSplit[i].length;j++){
        count++
    }
    if(maxCount<count){
        maxCount=count
        maxWord=strSplit[i]
    }
}
console.log(wordCount)
console.log(maxWord+" "+maxCount)