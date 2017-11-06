function model(opType, obj) {
	if (opType == 'add') {		
		var newObj = {}
		for (var key in obj) {
			value = obj[key]
			dataType = schema[key]
			if (dataType != 'undefined' && typeof value == dataType) {
				newObj[key] = obj[key]				
			}
		}
		DB.push(newObj)
	}	
}

schema = {id: "number", name: "string", age: "number", married: "boolean"}
DB = []

model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})
console.log(DB)

// age is of type string so it was also not added 