
// Hazırkı tarixi bu formatlarda yazın: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.

const a = new Date();
const dd = a.getDate();
const mm = a.getMonth()+1; 
const yyyy = a.getFullYear();

console.log(mm+'-'+dd+'-'+yyyy);
console.log(mm+'/'+dd+'/'+yyyy);
console.log(dd+'-'+mm+'-'+yyyy);
console.log(dd+'/'+mm+'/'+yyyy);






// 2115-dən hazırki(текущий) ili çıxmaq(вычитать). Hazırki ili JS (JS Date) ilə tapmaq lazımdır.

const b = new Date();

console.log(2115-b.getFullYear());




// Hazırki günü və vaxtı göstərən proqram yazmaq

const c = new Date();

const gunler = ["Bazar günü", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"];

console.log('Bugun :',gunler[c.getDay()], 'Vaxt :', c.getHours()+':'+c.getMinutes()+':'+c.getSeconds());




// Verilmiş faylın genişlənməsini tapmaq
var format = ['a.jpeg','b.mp3','c.png','d.svg','f.mp4'];

var h = format[1].split('.');

console.log(h[1]);




// Adınızın 2-ci hərfini silib, yeni sözü göstərmək.
var name = 'Ferid';

var newName1= name.substr(0,1);
var newName2= name.substr(2);
var newName3 = newName1.concat(newName2);

console.log(newName3);



// JavaScript sözünün ilk və son hərfinin yerini dəyişmək.

var js = 'JavaScript';

var newJs1 = js.substr(1,8);
var newJs2 = js.substr(0,1);
var newJs3 = js.substr(-1);
var newJs4 = newJs3.concat(newJs1);
var newJs5 = newJs4.concat(newJs2);


console.log(newJs5);


// Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq
var ad = 'ferid';

var newAd1 = ad[1].toUpperCase();
var newAd2 = ad[2].toUpperCase();
var newAd3 = ad.substr(0,1);
var newAd4 = ad.substr(3);
console.log(newAd3+newAd1+newAd2+newAd4);


// "azerbaycan" sözündə random sırada çıxmış bir hərfi böyük hərflə əvəzləmək.
var randomNumb = Math.floor(Math.random()*10);

var az = 'azerbaycan'




// JavaScript sözünün ilk hərfini sözün əvvəl və sonuna birləşdirmək
var jvs = 'JavaScript';

var newJvs1 = js.substr(0,1);

console.log(newJvs1+jvs+newJvs1)







let ag = 'azerbaycan';


let bt = 'azer';

let cs = ag.substring(0,4)


if(bt===cs){
    console.log(ag)
} else {
    console.log(bt+ag)
}


