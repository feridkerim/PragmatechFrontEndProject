// 8) Verilmiş array-ın verilmiş index-dəki elementini console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 4 => 50




var arr = [10,20,30,40,50,60,70];


var a = arr[1];


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(a==element){
        console.log(a)
    }
}