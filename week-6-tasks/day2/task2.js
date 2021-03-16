// 2) Elə proqram yazın ki, verilmiş cümlənin əvvəlinə verilmiş simvolları əlavə etsin. Əgər həmin
// simvollar verilmiş cümlənin əvvəlində varsa, verilmiş cümlənin özünü göstərsin.
// Məsələn: proqramlasdirma, proq => proqramlasdirma
// proqramlasdirma, veb => vebproqramlasdirma




var word = 'proqramlasdirma';

var sim = 'veb';





if(word.slice(sim,sim.length)==sim){
    console.log(word)
}else{
    console.log(sim+word)
}