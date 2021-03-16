// 1) Array-dəki dəyərləri bu formada dövr ilə çıxarmaq: BMW - Fiat - Mercedez - Audi - Opel - Bentley
// ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"]




const arr = ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"];

let a = ''

for (var str = 0; str < arr.length - 1; str++) {

    a += arr[str] + '-'



}

console.log(a + arr[arr.length - 1])