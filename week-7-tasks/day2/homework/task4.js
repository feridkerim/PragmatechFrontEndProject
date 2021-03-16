// 4) Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olMAMAsini yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => true
//     [9, 3, 7, 8] => false




let arr = [7, 8];

a= 1
b=3
var c = true
for (let index = 0; index < arr.length; index++) {
    if(a==arr[index]||b==arr[index]){
        c=false
    }
    
}


console.log(c)