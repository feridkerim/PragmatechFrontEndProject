// 5) Reqemlerden ibaret verilmis array-in icinde axtarilan reqemin 2 defe olmasini yoxlamaq. true ve ya false qaytarmaq
// meselen: [53, 90, 30, 21, 30] axtar 30 => true
//     [53, 90, 21, 30] axtar 30 => false





let arr = [53, 90, 30, 21, 30, 21, 21] ;

let search =21;

let a = 0

let b = false

for (let index = 0; index < arr.length; index++) {
    if(search==arr[index]){
        a++
        if(a==2&&a<3){
            b=true
            
        }
    }
    

}


console.log(b)


