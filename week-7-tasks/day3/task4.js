// IndexOf


let indexOf = (word,symbol)=>{
    let a = []
    for (let index = 0; index < word.length; index++) {
        if (symbol == word[index]) {
            a = index

        }
        
    }
    return a
}


console.log(indexOf('ferid','i'))