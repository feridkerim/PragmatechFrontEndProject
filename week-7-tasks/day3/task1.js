// Substr




let subStr = (word, start, uzunluq)=>{
    let a = ''

    for (let index = start; index <= uzunluq; index++) {
        a+=word[index]
    }
    
    return a
    


}
console.log(subStr('ferid',0,4))






