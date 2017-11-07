var bankAccount = {}
bankAccount.withdraw = amount => {
	bankAccount.balanceValue -= amount
}
bankAccount.deposit = amount => {
	bankAccount.balanceValue += amount
}
bankAccount.balance = () => {
	console.log(bankAccount.balanceValue)
}
bankAccount.set = (amount) => {
	bankAccount.balanceValue = amount
}
bankAccount.clear = () => {
	bankAccount.balanceValue = 0
}
bankAccount.balanceValue = 0

bankAccount.withdraw(2)
bankAccount.withdraw(5)
bankAccount.deposit(4)
bankAccount.deposit(1)
bankAccount.balance()

bankAccount.clear()
bankAccount.balance()

bankAccount.set(10)
bankAccount.balance()