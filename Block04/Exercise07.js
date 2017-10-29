arr = ['banana','34','68', [12], {number:14},'one','two','14', 54]
arr.forEach(function(element){
	if (isNaN(Number(element))) {
		console.log(`${element} cannot be converted to a number`)		
	} else {
		console.log(Number(element))
	}
})
