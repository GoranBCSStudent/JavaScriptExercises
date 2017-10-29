var arr = ['banana',['hello'],12,true];
arr.forEach(function(element, index) {
	console.log(typeof element == 'string', index);
});