var bool [] = 0
var maxCapacity = 5
var arr  = ['mike','john',true, false,12,true,false]
for (var el of arr) {
	if (typeof el == 'bool') {
		bool.push(el)
	}
}

// couldn't understand this exercise