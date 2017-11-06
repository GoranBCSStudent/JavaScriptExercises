function model(opType, obj) {
	if (opType == 'add') {		
		var newObj = {}
		for (var key in obj) {			
			if (typeof schema[key] != 'undefined') {				
				if (typeof obj[key] == schema[key].type) {
					newObj[key] = obj[key]
				} else if (typeof schema[key].default !='undefined') {					
					newObj[key] = schema[key].default
				}
			}				
		}
		for (var key in schema) {			
			if (typeof obj[key] == 'undefined'  && typeof schema[key].default !='undefined'){
				newObj[key] = schema[key].default
			}
		}
		DB.push(newObj)
	}	
}

schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false}
    }
DB = []

model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner 262, Barcelona, Spain"})
model("add", {name: 43, married: "asdfasdf"})
model("add", {name: "43", married: true, age: 20})
console.log(DB)