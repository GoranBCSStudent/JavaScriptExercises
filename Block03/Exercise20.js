var arr = [
        //monday
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'
        
]
var sumYens = 0;
var rate = 0.0089;

for (var element of arr) {
        sumYens += parseInt(element)
}
average = Math.round(sumYens / arr.length)
console.log(`you spent an average of ${Math.round(average * rate)} per day in you trip to Japan`)
