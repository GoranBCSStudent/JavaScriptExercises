var person = {
        name:'Antonello',
        surname:'Sanna',
        age:34,
        gender:'male'
        
}

for (var key in person) {
	console.log(`key ${key} value ${person[key]}`)
}