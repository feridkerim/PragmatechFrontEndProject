// 6) Verilmiş rəqəmin ədədlərini tək-tək toplamaq(сложить).
// Məsələn: 555 => 15, 51 => 6, 1234 => 10





let num = 51;

let str = String(num)

let num2= 0

for (let index = 0; index < str.length; index++) {

    num2+=Number(str[index])
    
    
}


console.log(num2)