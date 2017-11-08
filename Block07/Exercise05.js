var universe = 
{	
	matter : {
		units: 0,
		total: function () {console.log(this.units)},
		destroy: function(unitsIn) {
			this.total()
			this.units -= unitsIn
			universe.energy.units += unitsIn
		},
		create: function(unitsIn) {
			this.total()
			this.units += unitsIn
			universe.energy.units -= unitsIn			
		}		
	},
	energy : {
		units: 0,
		total: function() {console.log(this.units)},
		destroy: function(unitsIn) {
			this.total()
			this.units -= unitsIn
			universe.matter.units += unitsIn
		},
		create: function(unitsIn) {
			this.total()
			this.units += unitsIn
			universe.matter.units -= unitsIn
		}		
	}	
}

universe.matter.total()
universe.energy.total()

universe.matter.destroy(5)
universe.matter.total()
universe.energy.total()

universe.energy.destroy(-5)
universe.matter.total() 
universe.energy.total()