var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

for (var element of arr) {
	console.log(arr2.includes(element))
}


// output is not the same but probably second array should be:
//	var arr2 = [100,20,30, 55]