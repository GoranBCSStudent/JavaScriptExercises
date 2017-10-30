var guesses = 5
var rndNum = Math.floor((Math.random() * 100) + 1);

alert(`You should guess number from 0 to 100 in ${guesses} attempts`)
var guessed = false
var number
while (!guessed && guesses > 0) {
	number = prompt('Enter the number')
	if (number > rndNum) {
		alert('number is too big')
	} else if (number < rndNum) {
		alert('number is too small')
	} else {
		guessed = true
	}
	guesses --
}
if (guessed) {
	document.write("<h1>You win!</h1>")	
} else {
	alert(`Number was ${rndNum}`)
}