var getTemp = () => {
	temp = Number(prompt('Please enter the temperature to be converted:'))
	scale = prompt('Please enter the temperature scale of entered value (C or F):')
	
	if (typeof temp != 'number') {
		document.write('temperature must be a number')
		return
	}

	var scaleConverted	= ''
	if (scale == 'C') {
		tempConverted = toFar(temp)
		scaleConverted = 'F'
	} else if (scale == 'F') {
		tempConverted = toCelcius(temp)
		scaleConverted = 'C'
	} else {
		document.write('please provide us a temperature in celsius or fahrenheit (C or F)')
		return
	}
	tellTemp(tempConverted, scaleConverted)
}
var toCelcius = inTemp => {
	return (inTemp - 32) * 5 / 9
}
var toFar = inTemp => {
	return inTemp * 9 / 5 + 32
}
var tellTemp = (inTemp, inScale) => {	
	document.write(`the temperature in ${inScale} is ${inTemp}`)
}

getTemp()