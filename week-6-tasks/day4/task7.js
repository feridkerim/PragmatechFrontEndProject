// 7) Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70






let arr = [10, 20, 30, 40, 50, 60, 70];


let a = 20;


let b = []


for (let i = 0; i < arr.length; i++) {
    if (a == arr[i]) {
        for (let j = i + 1; j < arr.length; j++) {
            b.push(arr[j])

        }
    }

}

console.log(b.length)