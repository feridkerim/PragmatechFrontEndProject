// 10) Verilmiş 2 array-ın rəqəmlərin hər ikisində olub-olmadığını yoxlamaq.
// Məsələn: [12, 10, 3] və [10, 3, 29, 15] => false
//     [10, 3, 29, 15] və [15, 10, 3, 29] => true


let arr1 = [15, 10, 3, 29,6];

let arr2 = [10, 3, 29, 15,5];

let a = false



for (let index = 0; index < arr1.length; index++) {
    for (let i = 0; i < arr2.length; i++) {
        if(arr1[index]==arr2[i]&&arr1.length==arr2.length){
            a=true
        }
        
    }
}



console.log(a)