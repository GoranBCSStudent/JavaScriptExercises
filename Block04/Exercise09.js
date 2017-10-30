var arr = []
var numbers = [12,33,12,43,99,11,5,21,43]
count = 0
numbers.forEach(function(a) {
	if (a % 2 == 1 && a < 30) {
		arr.push(a)
		count ++
	}
})
console.log(`There are ${count} odd numbers under 30 in our array  (${count}) [${arr}]`)