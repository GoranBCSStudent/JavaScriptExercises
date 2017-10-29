var one   = {name:'antonello'};
var two   = ['name', 'antonello'];
var three = [[],[],{},"antonello",3,function(){}];
console.log(Array.isArray(one));
console.log(Array.isArray(two));
console.log(Array.isArray(three));