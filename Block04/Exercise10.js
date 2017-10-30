var arr = ['mario','john',34,true,'banana']
var arrStringLen = []
var arrNonString = []
arr.forEach(function(a) {
	if (typeof a == 'string') {
		arrStringLen.push(a.length)
	} else {
		arrNonString.push(a)
	}

})
var countNonString = arrNonString.length
console.log(`the lengths of the strings are ${arrStringLen}, there are ${countNonString} non string elements in our array and these are (${countNonString}) [${arrNonString}]`)