// 5) Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить).

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15



var a = 10.5

var b = a-Math.floor(a)

var c = Math.floor(a)

console.log(c,Number(b.toFixed(2)))


