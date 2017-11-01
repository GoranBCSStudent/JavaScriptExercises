function checkLength(arr, minlen) {
	var cntApproved = 0
	arr.forEach(function(el) {		
		if (el.length >= minlen) {
			cntApproved++
		}
	})
	console.log(`there are ${cntApproved} approved items and ${arr.length - cntApproved} rejected items in the provided array`)
}

var arr  = ['banana','salame','cheese','coke'] 
var arr1 = ['george','pane','mortadella','spaghetti','pesto']
var arr2 = ['bread','butter','peanuts','nutella']

checkLength(arr, 5)
checkLength(arr1,7)
checkLength(arr2,3)