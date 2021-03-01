// Tapşırıq 1:
// Verilmiş ədədin faktorialını hesablayan proqram yazın:
// Example: Size verilir 6 => Cavab: 720


var num=6;

var faktorial = 1;

for (let index = 1; index <= num; index++) {

    var faktorial = faktorial*index;

    if(num == 0 || num == 1){

        console.log(1)
    }
}

console.log(faktorial)