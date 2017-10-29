var arr = [1,5,9,33,65,122,66,['banana']]
arr.forEach(function(element){
	if (typeof element == 'number') {
		if (element % 2 == 0) {
			console.log('it is even')
		} else {
			console.log('it is odd')
		}
	} else {
		console.log('invalid data provided')
	}
})