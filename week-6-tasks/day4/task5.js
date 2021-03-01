// 5) Verilmiş sözün son 3 hərfini dövrdən istifadə edərək kiçik hərflərlə yazmaq. 

// Məsələn: SALAM => SAlam


var word = 'SALAM'




if(word.length > 3 ){
    var a = word.slice(-3)
    var c= a.toLowerCase()
    var b = word.slice(0,-3) 
    console.log(b+c)   
}else{
    console.log(word)
}