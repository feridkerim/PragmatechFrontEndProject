// 8) Verilmiş array-in içində tək və cüt rəqəmləri ayrılıqda toplayıb, birləşdirmək

// Məsələn: [1, 2, 3, 4, 5] => tək (1+3+5) + cüt(2+4) = 96


var arr =[1, 2, 3, 4, 5];

var a = 0;
var b = 0;
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2 == 0){
        a+=arr[index]
    }else if(arr[index]%2 == 1){
        b+=arr[index]
    }
    
    
}

console.log(String(b)+String(a))