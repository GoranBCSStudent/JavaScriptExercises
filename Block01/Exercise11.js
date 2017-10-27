var celsiusDegrees = 35;
document.write(`<h1>${celsiusDegrees}°C is ${celsiusDegrees * 9 / 5 + 32}°F</h1>`);
var fahrenheitDegrees = celsiusDegrees * 9 / 5 + 32;
document.write(`<h1>${fahrenheitDegrees}°F is ${(fahrenheitDegrees - 32) * 5 / 9}°C</h1>`);