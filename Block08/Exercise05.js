var compare = function(left, right, sortDirection) {
	if (sortDirection == 'ascending') {
			return left < right
		} else {
			return left > right			
		}
	}	
var sorter = function(arr, sortDirection) {		
	if (!sortDirection) {
		sortDirection ='ascending'
	} else if (sortDirection!='ascending' && sortDirection!='descending') {
		alert('wrong order provided whatever please provide us with ascending or descending order instructions!')
		return
	}

	var arrSorted = []		

	while (arr.length > 0) {
		pos = 0
		var value = arr[pos]
	
		for (var i = 1; i < arr.length; i++) {			
			if (compare(arr[i],value, sortDirection)) {
				value = arr[i]				
				pos = i
			}			
		}
		arrSorted.push(arr[pos])
		arr.splice(pos,1)
	}

	document.write('<h1>' + arrSorted + '</h1>')	
}

sorter([11111,9,10,12,3,321])
sorter([11111,9,10,12,3,321],'ascending')
sorter([11111,9,10,12,3,321],'descending')
sorter([11111,9,10,12,3,321],'whatever')