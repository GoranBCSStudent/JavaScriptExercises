var commaCnt = 0
var questionCnt = 0
var str = 'hello, how are you today? I am not bad and you?'
for (var letter of str) {
	if (letter == ',') {
		commaCnt ++
	}
	if (letter == '?') {
		questionCnt ++
	}
}
var firstWord = 'there is'
var commaWord = 'comma'
if (commaCnt > 1) {
	commaWord += 's'
	firstWord = 'there are'
}
var questionWord = 'mark'
if (questionCnt > 1) {
	questionWord += 's'
	firstWord = 'there are'
}

console.log(`${firstWord} ${commaCnt} ${commaWord} and ${questionCnt} question ${questionWord} in this sentence`)