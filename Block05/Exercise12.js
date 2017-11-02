function stringChop(str, chunkSize) {
	var arr = str.split('')	
	var arrTmp = [], arrResult = []	

	if (typeof chunkSize == 'undefined') {
		chunkSize = str.length
	}
	while (arr.length > 0) {
		arrTmp = []
		for (var i = 0; i < chunkSize; i++) {
			arrTmp.push(arr[i])
		}		
		arrResult.push(arrTmp.join(''))
		arr.splice(0,chunkSize)
	}	
	console.log(arrResult)
}

stringChop('w3resource');
stringChop('w3resource',2);
stringChop('w3resource',3);