function sumAll(obj) {
	var sum = 0	
	for (var key in obj) {
		sum += obj[key]
	}
	return sum
}
var obj = {a: 1, b: 2, c: 2}

console.log(sumAll(obj))
console.log(sumAll({}))
console.log(sumAll())