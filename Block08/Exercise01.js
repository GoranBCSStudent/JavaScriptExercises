var matchThemUp = function(maleName, femaleName) {
	var arrPerson = []
	var arrQuestions = []
	
	arrPerson.push(maleName)
	arrPerson.push(femaleName)

	arrQuestions.push({q: 'do you like pets', a: []})
	arrQuestions.push({q: 'do you like beer', a: []})
	arrQuestions.push({q: 'do you like reading books', a: []})
	arrQuestions.push({q: 'do you enjoy riding a bike', a: []})
	arrQuestions.push({q: 'do you like mainstream music the most', a: []})	
	arrPerson.forEach(function(person) {
		arrQuestions.forEach(function(ele) {
				a = ''
				while (a!='yes' && a!='no') {
					a = prompt(`${ele.q} ${person}? ${a!=''?'(answer with yes or no)':''}`)
					ele.a.push(a)		
				}				
			})
	})
	countMatch = 0
	arrQuestions.forEach(function(ele) {
		if (ele.a[0] == ele.a[1]) {
			countMatch++
		}
	})
	if (countMatch > 2) {
		console.log('we have a match')
	} else {
		console.log('no match found!')
	}	
}

var maleName = prompt('Please enter male name:')
var femaleName = prompt('Please enter female name:')
matchThemUp(maleName, femaleName)