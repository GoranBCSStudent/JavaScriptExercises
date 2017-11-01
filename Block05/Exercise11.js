function runOnRange(functionIn, conditions) {
	if (typeof conditions.step == 'undefined') {
		conditions.step = 1
	}
	if (conditions.start < conditions.end && conditions.step > 0 || conditions.start > conditions.end && conditions.step < 0) {
		for (var i = conditions.start; i < conditions.end; i += conditions.step) {
			console.log(functionIn(i))
		}	
	}	
}

var addOne = function(num) {return num + 1}
runOnRange(addOne, {start: 10, end: 17, step: 3})
runOnRange(addOne, {start: -6, end: -4})
runOnRange(addOne, {start: 12, end: 12})
runOnRange(addOne, {start: 23, end: 26, step: -1})
runOnRange(addOne, {start: 23, end: 26, step: 0})