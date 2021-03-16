// toString



const toString = (num) => {
    let a = ''
	if(typeof num === 'number') {
        a+=num
	}

    return a
}
console.log(toString(5));