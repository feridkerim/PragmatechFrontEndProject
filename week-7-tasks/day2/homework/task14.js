// 14) Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək




var word = 'feRID'



for (let index = word.length-3; index < word.length; index++) {
    if(word.length<3) {
        console.log(word)
    } else{
        word[index].charCodeAt()
        console.log(word[index])
    } 
}