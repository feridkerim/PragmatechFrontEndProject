// 7) Verilmiş array-in içində ən uzun olan string-i tapmaq
// Məsələn: [pro, p, proqr, pr, proqram, proq, proqra] => proqram


var arr = ['pro', 'p', 'proqr', 'pr', 'proqram', 'proq', 'proqra']

var a = arr[0]

for (let index = 0; index < arr.length; index++) {
    
    if (a.length<arr[index].length) {
        a = arr[index]
    }
    
}

console.log(a)
