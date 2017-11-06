function sort(objIn) {
	var arr = []
	for (var key in objIn) {
		arr.push(objIn[key])
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
	
	var i = 0
	var newObj = {}
	arrSorted.forEach(function (ele) {
		newObj[i] = ele
		i++
	})
	return newObj
}
obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
console.log(sort(obj)) 