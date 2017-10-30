var str = 'Antonello Sanna Likes videoGames'
count = 0
for (var letter of str) {
	if (letter == letter.toUpperCase() && letter != ' ') {
		console.log(letter)
		count ++
	}
}
console.log(`there are ${count} capitals in this word`)
str