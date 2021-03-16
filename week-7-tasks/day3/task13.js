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




function splice(str, index, count, add) {
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }
  
    return slice(str,0, index) + (add || "") + slice(str, index , count);
  }


  console.log(splice(["Banana", "Orange", "Apple", "Mango"],3,0,"Lemon,Kiwi,"))