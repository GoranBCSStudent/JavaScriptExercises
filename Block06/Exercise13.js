function splice(obj,pos,len) {
	var i = 0
	var newObj = {}
	for (var key in obj) {
		if (i >= pos && i < pos + len) {
			newObj[key] = obj[key]
		}
		i++
	}
	return newObj
}

var obj = {a: 1, b: 2, c: 2}

var newObje = splice(obj, 0, 2)
console.log(newObje)
// newObje => {a: 1, b: 2} 

var newObje = splice(obj, 2, 2)
console.log(newObje)
// newObje => {c:2} 

var newObje = splice(obj, 5, 2)
console.log(newObje)
// newObje => {} 

var newObje = splice(obj, 0)
console.log(newObje)
// newObje => {a:1} 

var newObje = splice(obj, 0, 0)
console.log(newObje)
// newObje => {} 