var arr = [ 
            10, 44, 55 ,66 , 77 , 55 , 44 ,
            3 , 3 , 3 , 4 , 5 , 6 , 54 , 
            "antonello", "33", "£", "66"
]
var arrUnq = []
arr.forEach(function(el) {
	if (typeof el == 'number' && el > 10 && !arrUnq.includes(el)) {
		arrUnq.push(el)
	}
})
console.log(arrUnq)