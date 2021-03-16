// 3) Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olmasini dövr ilə yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => false
//     [9, 3, 7, 8] => true





var arr = [9, 2, 7, 8, 1, 5];

var a = 6;

var b = 3;


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element == a || element == b) {
        var f = true
        break
    } else {

        var f = false

    }

}

console.log(f)