var arr = ['mike','jason','peter','robert','mike','jason','jenny','jane']
var arrUnique = []
var arrDuplicates = []
arr.forEach(function(el) {
	if (arrUnique.includes(el)) {
		arrDuplicates.push(el)
	} else {
		arrUnique.push(el)
	}
})
console.log(`there are ${arrUnique.length} elements in the array of values and these are ${arrUnique} and there are ${arrDuplicates.length} elements in the array of duplicates and these are ${arrDuplicates} `)