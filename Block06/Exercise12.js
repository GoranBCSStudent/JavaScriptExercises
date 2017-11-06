function bankAccount() {
	account.amount = 0
}
function withdraw(amount) {
	account.amount -= amount
}
function deposit(amount) {
	account.amount += amount
} 
function balance() {
	console.log(account.amount)
}

var account = {}

bankAccount()
withdraw(2)
withdraw(5)
deposit(4)
deposit(1)
balance() 