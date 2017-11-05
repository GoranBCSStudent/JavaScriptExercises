function modifyObject (objIn, objkey, objvalue) {
	objIn[objkey] = objvalue
}
var obj = {a: 1, b: 2}
modifyObject(obj, 'c', 3) 
console.log(obj)