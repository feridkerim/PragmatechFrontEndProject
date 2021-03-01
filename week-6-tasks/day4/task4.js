// 4) Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить). Yalnız dövr, if/else-dən istifadə edərək yazmaq lazımdır, hazır method-lar OLMAZ

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15




var a = 1.7;


var c = Math.floor(a)

var b = a-c


console.log(b)


if(b<0.100){
    var d = b*10
    console.log(c+Math.floor(d))
}else{

    var d = b*100
    console.log(c+Math.floor(d))
}