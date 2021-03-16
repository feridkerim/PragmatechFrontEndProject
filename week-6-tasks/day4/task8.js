// 8) Verilmiş array-ın verilmiş index-dəki elementini console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 4 => 50




let arr = [10, 20, 30, 40, 50, 60, 70];


let a = 3;


for (let index = 0; index < arr.length; index++) {
    if (a == index) {
        console.log(arr[index])
    }
}