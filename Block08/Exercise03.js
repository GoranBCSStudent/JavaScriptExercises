var tally = function(arr) {
	var unique = {}
	arr.forEach(function(ele) {
		if (unique[ele]) {
			unique[ele]++
		} else {
			unique[ele] = 1
		}
	})
	console.log(unique)
	aUnq = []
	for (var key in unique) {		
		aUnq.push({[key]: unique[key]})
	}
	console.log(aUnq)
}

tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6])