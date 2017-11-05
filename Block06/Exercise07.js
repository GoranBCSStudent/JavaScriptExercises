function last(obj) {
	var newO = {}
	for (var key in obj) {
		keyLast = key
		valueLast = obj[key]		
	}
	newO[keyLast] = valueLast
	return newO
}

var obj = {a: 1, b: 2}
var newObje = last(obj) 
newObje	