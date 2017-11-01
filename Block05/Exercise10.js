function dollarsConverter (amount, currency) {
	if (currency == 'euro') {
		rate = 1.2
	} else if (currency == 'pounds') {
		rate = 1.5
	} else {
		console.log('wrong currency provided!')
		return
	}	
	console.log(`You will receive ${Math.round(amount / rate)} ${currency} in exchange for your ${amount} dollars`)	
}

dollarsConverter(100,'pounds')
dollarsConverter(100,'euro')
dollarsConverter(100,' Japanese Yen')