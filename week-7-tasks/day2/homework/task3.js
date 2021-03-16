// 3) Reqemlerden ibaret verilmis array-in en boyuk reqemini tapib, diger butun reqemleri onunla evezlemek
// meselen: [12, 10, 3] => [12, 12, 12]
//     [10, 3, 29, 15] => [29, 29, 29, 29]





let b = (arr,a)=>{
    for (let index = 0; index < arr.length; index++) {
            arr[index]=a
        
    }
    return arr
}



let arr = [10, 3, 29, 15];


let a = 0;




for (let index =0 ; index < arr.length; index++) {
    if (arr[index]>a){
        a=arr[index]

    }
    
    
}


console.log(b(arr,a))


