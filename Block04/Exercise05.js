var arrString = []
arrString.push('hello, how are you today? I am not bad and you?')
arrString.push('hello, how, are, you today? I am not bad and you?')

arrString.forEach(function(el) {
	var commaCnt = 0
	var questionCnt = 0	
	var str = el
	for (var letter of str) {
		if (letter == ',') {
			commaCnt ++
		}
		if (letter == '?') {
			questionCnt ++
		}
	}
	var firstCommaWord = 'there is'
	var commaWord = 'comma'
	if (commaCnt > 1) {
		commaWord += 's'
		firstCommaWord = 'there are'
	}
	var firstQuestionWord = 'there is'
	var questionWord = 'mark'
	if (questionCnt > 1) {
		questionWord += 's'
		firstQuestionWord = 'there are'
	}

	console.log(`${firstCommaWord} ${commaCnt} ${commaWord} and ${firstQuestionWord} ${questionCnt} question ${questionWord} in this sentence`)	
})
