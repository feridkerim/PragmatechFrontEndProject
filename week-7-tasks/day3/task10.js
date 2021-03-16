// Push




let push = (arr,newvalue)=>{
    let a = (arr.length-1)+1
    for (let index = 0; index < arr.length; index++) {
        
        arr[a]=newvalue

    }
    return arr
}


console.log(push(['ferd', 'kerim','hesen'],'cavid'))