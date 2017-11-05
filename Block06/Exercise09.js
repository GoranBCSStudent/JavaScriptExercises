function model(opType, obj) {
	if (opType == 'add') {
		DB = []
		var newObj = {}
		for (var key in obj) {
			if (schema.includes(key)) {				
				newObj[key] = obj[key]				
			}
		}
		DB.push(newObj)
	}	
}

schema = ["id", "name", "age"]
DB = []

model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"})
console.log(DB)

model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"})
console.log(DB)