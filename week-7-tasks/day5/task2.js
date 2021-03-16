// Armstronq ededler=> 371=>3^3+7^3+1^3=27+343+1=371 (Armstronq ededler) //Verilmis ededin armstronq eded olub olmadigini mueyyen eden proqram





let armstrong = 371;

let a = armstrong + ''

let b = ''

let c = 0

let d = 0

let e = false

for (let index = 0; index < a.length; index++) {

    b = a[index]

    console.log(b)

    c = b * b * b

    d += c

    if (d === armstrong) {
        e = true
    }

}

console.log(e)