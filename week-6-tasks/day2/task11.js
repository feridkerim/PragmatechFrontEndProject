// 11) Verilmiş sözün, verilmiş hərfinin index-ləri cəminin 5-dən böyük olmasını yoxlamaq və cəminin neçə olmasını göstərmək. Əgər cəm 5-dən böyükdürsə "böyükdür", əks halda "kiçikdir" yazın.
// Məsələn: salam, a  =>  cəm: 1+3, kiçikdir.  teyyare, e => cəm: 1+6, böyükdür

let word = 'salam';

let b = 'a'

let a = 0;

let c = '';

for (let i = 0; i < word.length; i++) {
    if (b == word[i]) {
        a += i
    }
    if (a < 5) {
        c = 'kicikdir'
    } else {
        c = 'boyukdur'
    }
}

console.log(c)