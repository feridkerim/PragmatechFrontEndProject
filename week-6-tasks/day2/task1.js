// 1) Verilmiş 2 rəqəmin birinin mənfi olacağı təqdirdə true, əks halda false qaytarsın.
// Məsələn: 5, 5 => false ||| 5, -5 => true ||| -5, 5 => true ||| -5, -5 => true






var num1 = -5;

var num2 = 5;

var truFalse = false;

if(num1 < 0 || num2< 0){
    truFalse = true
}


console.log(truFalse)