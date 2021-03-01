// 11) Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70




var arr = [10,20,30,40,50,60,70];

var arr1 = arr.indexOf(20);

var arr2 = arr.slice(arr1+1,arr.length);

console.log(arr2.length)

console.log(arr2)


