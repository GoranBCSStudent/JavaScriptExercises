var approved = []
var ages = [12,33,12,43,99,11,5,21,43]
var count = 0;
for (var el of ages){
	if (el >= 21 && el <= 65) {
		approved.push(el)
		count ++
	}
}
console.log(`there are ${count} people in the list and the ages are ${approved}`)