// 12) Verilmiş array-ın verilmiş elementini array-dən çıxarmaq

// Məsələn: [10,20,30,40,50,60,70], 50 => [10,20,30,40,60,70]






var arr = [10,20,30,40,50,60,70];

var arr1 = arr.indexOf(60);


var arr2 = arr.slice(0,arr1);
var arr3 = arr.slice(arr1+1,arr.length);

console.log(arr2.concat(arr3));


