function calc(a, b, op) {
	var ret

	if (typeof b == 'string') {
		op = b
		if (b == '+' || b == '-') {
			b = 0
		}
		if (b == '*' || b == '/') {
			b = 1
		}
	}
	
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

console.log(calc(10,'/'))
console.log(calc(30,'+'))
console.log(calc(2,'-'))
console.log(calc(3,'*'))