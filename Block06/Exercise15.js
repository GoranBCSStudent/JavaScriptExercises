function sort(objIn, sortType, sortDirection) {	
	var arr = []
	if (!sortType || !sortDirection) {
		return('missing argument here!')
	}
	if (sortType == 'keys') {
		for (var key in objIn) {
			arr.push(key)
		}
	} else {
		for (var key in objIn) {
			arr.push(objIn[key])
		}	
	}	

	var arrSorted = []	
	while (arr.length > 0) {
		var value = arr[0]
		pos = 0
		for (var i = 1; i < arr.length; i++) {			
			if (arr[i] < value) {
				value = arr[i]				
				pos = i
			}			
		}
		arrSorted.push(arr[pos])
		arr.splice(pos,1)		
	}
		
	var newObj = {}	
	if (sortDirection == 'ascending') {
		for (var i = 0; i < arrSorted.length; i++ ) {
			newObj[i] = arrSorted[i]
		}
	} else {
		for (var i = 0; i < arrSorted.length; i++ ) {
			newObj[arrSorted.length - 1 - i] = arrSorted[i]
		}
	}	
		
	return newObj
}

var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
console.log(sort(obj,'keys','ascending'))
//Object {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f"}
console.log(sort(obj,'keys','descending'))
//Object {0: "f", 1: "e", 2: "d", 3: "c", 4: "b", 5: "a"}
console.log(sort(obj,'values','ascending'))
//Object {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}
console.log(sort(obj,'values','descending'))
//Object {0: 20, 1: 4, 2: 4, 3: 3, 4: 1, 5: 1}
console.log(sort(obj,'values')) 