function tellAge(d,m,y) {
	today = new Date
	var td = today.getDate(), tm = today.getMonth() + 1, ty = today.getFullYear()
	age = ty - y	
	if (m < tm || (m == tm && d < td)) {
		age--
	}	
	return age
}

function checkAge(d,m,y) {
	age = tellAge(d,m,y)
	if (age >= 21) {
			console.log(`You are ${age} years old therefore old enough to drink and drive`)					
	} else if (age >= 16) {
		console.log(`You are ${age} years old therefore old enough to drive but not to drink`)
	} else {
		console.log(`sorry you are too young to drink or drive!`)
	}	
}

checkAge(2,9,1995)
checkAge(2,9,1999)
checkAge(2,9,2005)