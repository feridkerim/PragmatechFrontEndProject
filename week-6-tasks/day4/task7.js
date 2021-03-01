// 7) Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70






var arr = [10,20,30,40,50,60,70];


var a =60;





for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(a == arr[index]){
        console.log(arr.length-arr.indexOf(a)-1)
        var c = arr.indexOf(a)
        console.log(arr.slice(c+1))
    }
}