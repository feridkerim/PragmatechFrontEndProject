// Shift




let shift = (arr)=>{
    let a = ''
    for (let index = 1; index < arr.length; index++) {
        
        a+= arr[index]+' '
        
    }
    return a
}



console.log(shift(['ferd', 'kerim','hesen']))