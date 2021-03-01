// Tapşırıq 8:
// Fesillere gore her fesilde hansi aylar oldugunu ekrana cixaran proqram yazin
// Example:
// 1-Qiş,2-Yay,3-Payız,4-Yaz(Switch-case ile bu shekilde yaza bilersiniz)
// eger 2 daxil edilerse, Console.log('Iyun,Iyul,Avqust') bu şəkildə yazılmalıdır




var num = 'qis';




switch (num) {
  case 1,'qis':
    console.log('qis',',' ,'Dekabr','Yanvar','Fevral')
    break;
  case 2,'yay':
    console.log('yay',',' ,'Iyun','Iyul','Avqust')
    break;
  case 3,'yaz':
    console.log('yaz',',' ,'Mart','Aprel','May')
    break;
  case 4,'payiz':
    console.log('payiz',',' ,'Sentyabr','Oktyabr','Noyabr')
    break;
}
