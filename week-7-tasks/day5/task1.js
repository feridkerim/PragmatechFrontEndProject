// 1-500 arasindaki palindrome ededleri console-a cixarmaq



let a = 500;

let palindrome = 0;

let b = ''

for (let index = 0; index < a; index++) {
    palindrome = index + '';
    if (palindrome[0] === palindrome[2]) {
        b = palindrome
        console.log(b)
    }

}