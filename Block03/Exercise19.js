var str = 'Ada Lovelace'
var arr = str.split(' ')
var arrSurname = arr[1].split('')
arr[1] = arrSurname[0].toUpperCase() + '.'
console.log(arr.join(' '))