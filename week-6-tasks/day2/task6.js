// 6) Hazırki tarixi götürüb yoxlayın ki, həftəsonu-durmu. Əgər həftəsonudursa true, əks halda false yazın.





var day = new Date();


if(day.getDay() == 7){
    console.log(true)
}else{
    console.log(false)
}