// 16) Verilmiş iki sözdən, birindən digərini yaratmaq olarmı deyə yoxlamaq. Olarsa true, əks halda false göstərsin.

// Məsələn: lotto, otlot => true ||| pul, upl => true ||| salam, lasas => false




let word = 'pul';

let word2 = 'ups';

let a = false




for (let index = 0; index < word.length; index++) {

    for (let i = 0; i < word2.length; i++) {
        if(word[index]==word2[i]){
            
            a=true
            break;
            
            
        }
    }
    
}


console.log(a)