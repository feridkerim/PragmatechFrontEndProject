// 1) Reqemlerden ibaret verilmis array-in ilk ve son reqemlerinin yerini deyismek
//  meselen: [1, 2, 3, 4, 9] => [9, 2, 3, 4, 1]



const arr = [15, 2, 3, 4, 76, 5];


let indexArr = arr[0];
let indexArr2 = arr[arr.length-1];


let arrShift = arr.shift();
let arrPop = arr.pop();

arr.unshift(indexArr2);
arr.push(indexArr);

console.log(arr);



