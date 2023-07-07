const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

// I need to sort out the owed variable into numbers

// const owed = parseInt(leoBalance + sarahBalance);

const owed = (leoBalance*-1 + sarahBalance*-1);

console.log(typeof leoBalance);

/* console log to be removed... 
This console log is working meaning the code above is working...
Note to self: Leave As Is

*/

const leo = `${leoName} ${leoSurname.trimEnd()} (Owed: R${leoBalance})`;

console.log(leo);

/* console log to be removed... 
This console log is working meaning the code above is working...
Note to self: Leave As Is

*/

const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed: R${sarahBalance})`;

console.log(sarah);

/* Below code is Work In-Progress
console log to be removed... 
This console log is working meaning the code above is working...
Note to self: Leave As Is

*/

const total = Number(leo) + Number(sarah);
console.log(total)

// Still to work out...only after the negative is a number

const result = divider + 'Total amount owed: R ' + total + divider;

// the below code is checking if you managed to turn everything into a string

console.log(typeof result);

// below is the original console code....the only required console log

console.log(result);