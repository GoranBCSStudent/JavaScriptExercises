var protoUniverse = function(unitsEnergy) 
{	
	if(!unitsEnergy) {
		unitsEnergy = 0
	}

	ref = this // I couldn't figure it out so I have found solution in Ting's snippet
	this.matter = {
		units: 0,
		total: function () {console.log(this.units)},
		destroy: function(unitsIn) {		
			this.units -= unitsIn
			ref.energy.units += unitsIn
		},
		create: function(unitsIn) {			
			this.units += unitsIn
			ref.energy.units -= unitsIn			
		}		
	}
	this.energy = {
		units: 0,
		total: function() {console.log(this.units)},
		destroy: function(unitsIn) {			
			this.units -= unitsIn
			ref.matter.units += unitsIn
		},
		create: function(unitsIn) {						
			this.units += unitsIn
			ref.matter.units -= unitsIn
		}		
	}
	this.total = function(state) {
		this[state].total()		
	}
	this.destroy = function(state, unitsIn) {
		this[state].destroy(unitsIn)
	}	
	this.energy.create(unitsEnergy)
}

Universe = new protoUniverse(10)

Universe.total("matter")
Universe.total("energy")

Universe.destroy("matter", 5)
Universe.total("matter")
Universe.total("energy")

Universe.destroy("matter", 5)
Universe.total("energy")