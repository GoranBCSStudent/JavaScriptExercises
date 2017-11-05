function swap(obj) {
	var newO = {}
	for (var key in obj) {
		newO[obj[key]] = key
	}
	return newO
}

var obj = {a: 1, b: 2}
var newObje = swap(obj) 
newObje	