var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}] 

var recursive = function (pos){	
	if (pos < arr.length) {
		console.log(`${arr[pos].name} ${arr[pos].age}`)
		recursive(pos + 1)		
	}	
}
recursive(0)