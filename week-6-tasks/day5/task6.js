// Tapşırıq 6:
// Size soz verilir ve o sozde kicik herfleri boyuk herfe boyuk herfleri ise kicik 
// herfe cevirmek teleb olunur

// Example: 'SaLam' Cavab=> sAlAM





var word = 'Salam';

var result = '';



for (let index = 0; index < word.length; index++) {

    var charCode = word[index].charCodeAt();
    if (charCode < 97) {
        result += String.fromCharCode(charCode + 32);
    } else {
        result += String.fromCharCode(charCode - 32);
    }
}

console.log(result);