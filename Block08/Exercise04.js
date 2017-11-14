var tally = function(arr,type) {
	if (!type || type!='arr') {
		type = 'obj'
	}

	var unique = {}
	arr.forEach(function(ele) {
		if (unique[ele]) {
			unique[ele]++
		} else {
			unique[ele] = 1
		}
	})
	if (type == 'obj') {
		console.log(unique)
	} else {		
		for (var key in unique) {		
			aUnq = []
			aUnq.push(Number(key))
			aUnq.push(unique[key])
			console.log(aUnq)
		}		
	}
}

tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6],'arr')
tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6])
