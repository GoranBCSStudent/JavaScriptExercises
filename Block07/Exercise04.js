var bankAccount = function(amount) {
	if(!amount) {
		amount = 0
	}

	this.balanceValue = amount

	this.withdraw = amount => {
		this.balanceValue -= amount
	}
	this.deposit = amount => {
		this.balanceValue += amount
	}
	this.balance = () => {
		console.log(this.balanceValue)
	}
	this.set = (amount) => {
		this.balanceValue = amount
	}
	this.clear = () => {
		this.balanceValue = 0
	}
}

var account = new bankAccount(10)
account.withdraw(2)
account.withdraw(5)
account.deposit(4)
account.deposit(1)
account.balance()