var Server = function() {
	var refMain = this
	this.accounts = []

	var bankAccount = {
		withdraw : function(accNo, amount) {
			refMain.accounts[accNo - 1] -= amount	
			console.log(`${amount} euros taken from account nr ${accNo}`)
		},
		deposit : function(accNo, amount) {
			refMain.accounts[accNo - 1] += amount			
			console.log(`${amount} euros added to account nr ${accNo}`)
		},
		balance : function(accNo) {
			if (!refMain.accounts[accNo - 1]) {
				console.log(`The balance of account nr ${accNo} is ${refMain.accounts[accNo - 1]} euros`)	
			} else {
				console.log(`Account not found`)	
			}		
		},
		delete : function (accNo) {
			refMain.accounts[accNo - 1] = undefined
		},
		set : function(accNo, amount) {
			refMain.accounts[accNo - 1] = amount
		},
		clear : function(accNo) {
			// why does this resets array element to undefined
			refMain.accounts[accNo - 1] = 0
		},
		new : function(dummy, amount) {
			refMain.accounts.push(amount)	
			console.log(`account nr ${refMain.accounts.length} created with ${amount} euros`)			
			return refMain.accounts.length
		}
	}

	this.router = function (url) {
		var commands = url.split('/')
		var accNo = Number(commands[1])
		var func = commands[2]
		var amount = Number(commands[3])
		
		return bankAccount[func](accNo, amount)
	}
}

var serverInstance = new Server()
userId = serverInstance.router("/account/new/10") 
userId2 = serverInstance.router("/account/new/0")
serverInstance.router("/1/withdraw/2")
serverInstance.router("/2/withdraw/5")
serverInstance.router("/1/deposit/2")
serverInstance.router("/2/deposit/8")
serverInstance.router("/1/balance")
serverInstance.router("/2/balance")
serverInstance.router("/2/delete") 
serverInstance.router("/1/balance")
serverInstance.router("/2/balance")
userId = serverInstance.router("/account/new/10")