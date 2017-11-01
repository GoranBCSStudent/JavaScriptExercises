function checkAge(d,m,y) {
	today = new Date
	var td = today.getDate(), tm = today.getMonth() + 1, ty = today.getFullYear()	
	var daysInMonthBefore = new Date(ty, m - 1, 0).getDate()

	if (m < tm || (m == tm && d < td)) {
		console.log('your birthday is passed for this year')
	} else if (m == tm && d == td) {
		console.log('happy birhtday! ')
	} else if (m == tm && d > td) {
		console.log(`your birthday will be in ${d - td} days`)
	} else if (m - tm == 1 && d < td) {				
		console.log(`your birthday will be in ${daysInMonthBefore - td + d} days`)
	} else if (m > tm && d == td) {
		console.log(`your birthday will be in ${m - tm} months`)
	} else if (m > tm && d > td) {
		console.log(`your birthday will be in ${m - tm} months and ${d - td} days`)	
	} else {				
		console.log(`your birthday will be in ${m - tm - 1} months and ${daysInMonthBefore - td + d} days`)
	}	
}

checkAge(2,8,1982)
checkAge(2,9,1982)
checkAge(25,2,1982)

checkAge(1,11,1982)
checkAge(2,11,1982)
checkAge(30,11,1982)
checkAge(1,12,1982)
checkAge(10,12,1982)