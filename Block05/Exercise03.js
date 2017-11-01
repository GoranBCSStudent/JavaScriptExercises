function calc(a, b, op) {
	var ret
	if (op == '+') {
		ret = a + b
	} else if (op == '-') {
		ret = a - b
	} else if (op == '*') {
		ret = a * b
	} else if (op == '/') {
		ret = a / b
	} 

	return ret
}
console.log(calc(10,2,'/'))
console.log(calc(10,2,'+'))
console.log(calc(10,2,'-'))
console.log(calc(10,2,'*'))