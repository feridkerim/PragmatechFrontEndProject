// Slice (array, string)






let slice = (word, start , end)=>{
    let a = ''
    if(start<0 && end<0 && end>start){
        start=word.length-(start*(-1))
        end = word.length-(start*(-1))
    }
    else if(start>0 && end<0){
        end = word.length-(start*(-1))
    }
    else if(start<0 && end>0 && word.length-(start*(-1))<=end ){
        start = word.length-(start*(-1))
    }
    for (let index = start; index < end; index++) {

        a+=word[index]
        

            
    }
    return a
    
}




console.log(slice('ferid',-3,-1))



