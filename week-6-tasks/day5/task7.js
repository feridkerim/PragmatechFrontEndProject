// Tapşırıq 7:
// Size bir eded verilir o ededin reqemleri cemini tapan proqram yazin
// Example: 2343 => 2+3+4+3=12




var num = 123456;

var str = num.toString();

var sum = 0;


for (let index = 0; index < str.length; index++) {

   var sum = sum + Number(str[index])
}

console.log(sum)
