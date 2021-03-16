// verilmis array-in icinde en uzun olan stringi tapmaq
// ['yusif', 'koroglu', camil', 'qacaq nebi', 'superman']


var arr = ['yusif', 'koroglu', 'camil', 'qacaq nebi', 'superman'];



var a = arr[0]

for (let index = 0; index < arr.length; index++) {
    
    if (a.length<arr[index].length) {
        a = arr[index]
    }
    
}

console.log(a)
