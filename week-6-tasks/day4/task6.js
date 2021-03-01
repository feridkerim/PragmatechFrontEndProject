// 6) Verilmiş array-ın verilmiş rəqəminin hansı index-lər aralığında yerləşməsini tapmaq. Dövr ilə
// Məsələn: [10,20,30,40,50,60,70], 50 => 3 və 5





var arr = [10,20,30,40,50,60,70];

var a = 70;

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element == a && a != arr[0] && a != arr[arr.length-1] ){
        var b = arr.indexOf(a)
        console.log(b-1,b+1)
        break
    }
    else if(a == arr[0]){
        var b = arr.indexOf(a)
        console.log(b+1)
        break
    }
    else if(a == arr[arr.length-1]){
        var b = arr.indexOf(a) 
        console.log(b-1)
        break
    }
}


