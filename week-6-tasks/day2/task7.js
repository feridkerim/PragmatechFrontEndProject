// 7) Verilmiş ədədin 1-10 arasında çıxarılmış random ədəd ilə uyğun gəlib-gəlməmisini yoxlamaq. Əgər uyğundursa “uygundur”, deyilsə “uygun deyil” yazılsın




var num = 5;

var rand = Math.floor(Math.random()*10);

console.log(rand)

if(num == rand){
    console.log('uygundur')
}else{
    console.log('uygun deyil')
}