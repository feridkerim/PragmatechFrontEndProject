/*
verilmis sozdeki butun tekrar olunan herfleri tapib silmek. eger tekrarlanan herf yoxdursa ele sozun ozunu gostermek
salamlar => smr
proqramlasdirma => poqlsdi
saturn => saturn
*/




var word = 'salamlar';



for (let index = 0; index < word.length; index++) {
    
    for (let i = index+1; i < word[index]; i++) {
        if(word[index]==word[i]){
            console.log(word[index])
        }
        
    }
}





