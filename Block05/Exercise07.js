function tellAge(d,m,y) {
	today = new Date
	var td = today.getDate(), tm = today.getMonth() + 1, ty = today.getFullYear()
	age = ty - y	
	if (m < tm || (m == tm && d < td)) {
		age--
	}	
	console.log(`you are ${age} years old`)
}

tellAge(2,8,1982)
tellAge(2,7,1982)
tellAge(28,7,1982)