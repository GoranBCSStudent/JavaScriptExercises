function checkTypeOf(arrIn) {
	cntString = 0
	cntBool = 0
	arrIn.forEach(function(el) {
		if (typeof el == 'string' ) {
			cntString++
		}
		if (typeof el == 'boolean') {
			cntBool++
		}
	})
	cntUnknown = arrIn.length - cntString - cntBool
	console.log(`there are ${cntBool} booleans and ${cntString} strings in the array and ${cntUnknown} unknown elements`)
}

var arr  = ['12','true','false','hello',12,true,undefined,false] 
var arr2 = ["banana",'true',['ciao'],12,'gennaro olivieri',true]
var arr3 = [12,13,54,true,'false']

checkTypeOf(arr)
checkTypeOf(arr2)
checkTypeOf(arr3)