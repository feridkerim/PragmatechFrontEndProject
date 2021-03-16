// 4) Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить). Yalnız dövr, if/else-dən istifadə edərək yazmaq lazımdır, hazır method-lar OLMAZ

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15




let a = 24.56;

let e = Math.floor(a)

let b = a + ''

let d = ''

let c = 0

for (let i = 0; i < b.length; i++) {

    if (b[i] == '.') {
        for (let j = i + 1; j < b.length; j++) {

            c += b[j]

        }
    }
}

console.log(Number(c) + e)