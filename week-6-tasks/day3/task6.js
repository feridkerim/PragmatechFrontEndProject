// 6) Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək



var word = 'ali'



if(word.length > 3 ){
    var a = word.slice(-3)
    var c= a.toLowerCase()
    var b = word.slice(0,-3) 
    console.log(b+c)   
}else{
    console.log(word.toUpperCase())
}
