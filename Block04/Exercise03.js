var arr2= [] 
var arr = 
[
        'banana',
        ['banana'],
        {banana:'banana'},
        false,
        true,
        'cheese',
        12,
        -32,
        'salame'
]
arr.forEach(function(element) {
	if (typeof element == 'string') {
		arr2.push(element)
	}
})
console.log(`there are ${arr2.length} of strings in this new array :${arr2}`)