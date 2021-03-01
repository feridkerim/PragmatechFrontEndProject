// 7) Verilmiş array-in verilmiş rəqəmini verilmiş rəqəmlə dəyişdirmək.

// Məsələn: [3,10,2,51,4, 643, 4, 11], 4, 222 => [3,10,2,51,222, 643, 222, 11]





var arr = [3, 10, 2, 51, 4, 643, 4, 11];

var a = arr.indexOf(4);

arr[a]=222

console.log(arr)