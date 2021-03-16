// 12) Verilmiş sözün, verilmiş hərfindən 3 hərf sonrakı hərfi tapıb, göstərmək. Əgər belə bir hərf yoxdursa, sözün 1 və 2-ci hərfini göstərmək.
// Məsələn: teyyare, e => a,  proqramlasdirma, m => s,  javascript, p => ja,  at, a => at





let word = 'at';

let a = 'a';

let b = ''


for (let i = 0; i < word.length; i++) {

    if (a == word[i]) {
        b = word[i + 3]
        if (b == undefined) {
            b = word[0] + word[1]
        }
        break;
    }



}

console.log(b)