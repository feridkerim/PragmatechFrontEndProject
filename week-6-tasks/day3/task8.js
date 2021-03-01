// 8) Verilmiş array-ı azdan çoxa doğru sıralamaq. (JS Sort dərsi)
// Məsələn: [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ] => -4,-3,1,2,3,5,6,7,8




var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, ];

const sira = (a,b)=> a-b;


console.log(arr.sort(sira))

