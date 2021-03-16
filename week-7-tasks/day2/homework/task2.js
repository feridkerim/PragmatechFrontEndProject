// 2) (Loop) Verilmiş sözün hərflərini Azərbaycan əlifbasında ondan sonra gələn hərflə əvəzləmək.
// Məsələn: ace => bçə





let alph = "abcçdeəfgğhxıijkqlmnoöprsştuüvyz"


let word = 'ace'


let a = ''

for (let index = 0; index < word.length; index++) {
    for (let i = 0; i < alph.length; i++) {
        if(word[index]==alph[i]){
            a+=alph[i+1]
        }
        
    }
    
}


console.log(a)