// 5) Verilmiş sözün son 3 hərfini dövrdən istifadə edərək kiçik hərflərlə yazmaq. 

// Məsələn: SALAM => SAlam


let word = 'SALAM'


let a = ''

for (let i = 0; i <= word.length - 1; i++) {

    if (i == word.length - 1 || i == word.length - 2 || i == word.length - 3) {
        let charCode = word[i].charCodeAt();
        a += String.fromCharCode(charCode + 32);
    } else {
        a += word[i];
    }
}

console.log(a);