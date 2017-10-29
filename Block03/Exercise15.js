var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr.forEach(function(element, index){
	document.write(`<h3>${element == arr2[index]}</h3>`)
})