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
console.log(`there is ${commaCnt} comma and ${questionCnt} question marks in this sentence`)