var arr  =  ['banana','apple','orange'];
var arr2 =  ['tv','dvd-player','playstation'];
arr.splice(1,0,arr2[1]);
arr2.splice(1,1,arr[2]);
arr.splice(2,1);
console.log(arr);
console.log(arr2);