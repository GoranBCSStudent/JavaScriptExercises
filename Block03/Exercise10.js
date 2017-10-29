var arr = [2,4,10]
var sum = 1;
arr.forEach(function(element) {
	sum *= element;
})
console.log(`the result of multyplying each number of the array is ${sum}`);