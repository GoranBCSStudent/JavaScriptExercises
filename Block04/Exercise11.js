var bool = []
var maxCapacity = 5
//var arr  = ['mike','john',true, false,12,true,false]
var arr = ['mike','john',true, false,12,true,false, false,true,false,true,false]
for (var el of arr) {
	if (typeof el == 'boolean' && bool.length < maxCapacity) {
		bool.push(el)
	}
}
console.log(bool)
// couldn't understand this exercise

/*in this exercise you should make sure that the array bool doesn't get filled with more than 5 elements, I guess the fact that the array example didn't have more than 5 didn't help. (sorry about that...)
I have now changed it to this :
var arr = ['mike','john',true, false,12,true,false, false,true,false,true,false]
so it should hopefully make more sense.*/