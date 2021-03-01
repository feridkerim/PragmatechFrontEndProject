// Tapşırıq 4:
// Size mueyyen bir aralig verilir o araligda sade ededleri console-a cixaran proqram
// yazin
// Example: Başlanğıc deyer - 1,Bitis deyeri - 50 
// 1 ile 50 arasindaki sade ededler: 2,3,5,7,11,13,...,47 
// Bu sekilde olmalidir





for (let index = 1; index < 50; index++) {
    var sade = 1;
    for (let a = 2; a < index/2; a++) {
        if(index%a == 0){
            var sade = 0
        }
        
    }
    if (sade == 1){
        console.log(index)
    }

}





