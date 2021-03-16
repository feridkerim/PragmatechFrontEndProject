// Replace




let replace = (str, searchvalue, newvalue)=>{

    let a = str

 
    for (let index = 0; index < str.length; index++) {
        if (searchvalue === str[index]) {
        
            a+=newvalue
        }
        
    }
        


    return a
}


console.log(replace('feridgsgd,ferid','ferid','kerim'))