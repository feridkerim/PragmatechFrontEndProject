// Tapşırıq 2:
// Ilk 10 ededin Fibonaççi sırasını düzəldən proqram yazın:
// Example: 0 1 1 2 3 5 8 13 21 34  


var num = 5;
var num1 = 0;
var num2 = 1;
var result = '';
var fibonacci = [];

for(var i = 0; i < num; i++){
    result = num1 + num2;
    num1 = num2;
    num2 = result;
    fibonacci.push(result);
}        

console.log(fibonacci);


