var str = 'Antonello LIKEs PlaYing GaMeS'
var arr2 = []
for (var letter of str) {
	arr2.push(letter.toLowerCase())
}
arr2 = arr2.join('');
console.log(arr2);
