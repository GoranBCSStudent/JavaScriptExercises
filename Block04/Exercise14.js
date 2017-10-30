var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
var str2 = ''
for (var el of str) {
	if (Number(el) != el) {
		if (el == el.toUpperCase()) {
			str2 += ' ' + el
		} else {
			str2 += el
		}	
	}
}
console.log(str2)