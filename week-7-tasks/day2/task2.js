// verilmis array-in icinde tek ve cut reqemleri ayriliqda taplayib, birlesdirmek
// [1,2,3,4,5] => tek(1+3+5) + cut(2+4) = 96





var arr = [1,2,3,4,5];

var a = 0;
var b = 0;
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2 == 0){
        console.log(arr[index])
        a+=arr[index]
    }else if(arr[index]%2 == 1){
        console.log(arr[index])
        b+=arr[index]
    }
    
    
}

console.log(String(b)+String(a))
