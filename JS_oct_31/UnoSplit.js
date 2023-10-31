function unoSplit(str,sChar,len){
    let ch
    let myWords = []
    let temp=""
    let index=0
    for(let i=0;i<len;i++){
        ch = str[i]
        if(ch == sChar){
            myWords[index] = temp
            temp = ""
            index++
        }
        else temp = temp + ch
        
    }
    return myWords
}
let data = "It is very difficult to count.this is Sample Data.welcome to Hyderabad.good Morning. Java is beautifully language."
let totalWords = unoSplit(data," ",data.length)
console.log("total no of words--->"+totalWords.length)
console.log(totalWords);