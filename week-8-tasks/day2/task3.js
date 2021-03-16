// 3) INPUT: arr=[10,2,10,10,2,5,11]

// OUTPUT: {
//       10:3,
//      2:2,
//      5:1,
//      11:1
//     }



let arr = [10, 2, 10, 10, 2, 5, 11];

let a = 0;

for (let i = 0; i < arr.length; i++) {
    let obj = { number: [], f: [] }
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] == arr[i]) {
                    a = -1
                }
                a++


            }
        }

    }
    if (a != 0) {
        console.log(obj.number = arr[i], obj.f = a)
        a = 0
    }

}