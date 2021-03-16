// 4) Verilmiş 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və
// ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.





var num1 = 45;
var num2 = 30;


if(num1>30 && num1<70){
    console.log(num1,'30 ve 70 arasinda yerlesir')
}else if(num1==30){
    console.log(num1, '30-a beraberdir')
}else if(num1==70){
    console.log(num1, '70-e beraberdir')
}else{
    console.log(num1,'30 ve 70 arasinda yerlesmir')
}

if(num2>30 && num2<70){
    console.log(num2,'30 ve 70 arasinda yerlesir')
}else if(num2==30){
    console.log(num2, '30-a beraberdir')
}else if(num2==70){
    console.log(num2, '70-e beraberdir')
}else{
    console.log(num2,'30 ve 70 arasinda yerlesmir')
}






