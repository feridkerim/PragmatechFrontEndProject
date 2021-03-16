// 10) Verilmiş sözün, verilmiş hərfindən əvvəlki hərfini tapıb, Azərbaycan əlifbasında ondan sonra gələn hərfi göstərmək. Əgər əlifbada sonuncu hərfdirsə, elə özünü göstərmək
// Məsələn: salam, l => b ,  nizam, a => z ,  elman, a => n




const alph = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz';



let word = 'nizam';

let a = 'a';

let b = '';

let c = '';



for (let i = 0; i < word.length; i++) {
    if (a == word[i]) {
        b = word[i - 1];
        console.log(b)
    }
    for (let j = 0; j < alph.length; j++) {
        if (b == alph.length - 1) {
            c = b
        } else if (b == alph[j]) {
            c = alph[j + 1]
        }

    }

}

console.log(c)