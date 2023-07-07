const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = ('R' + parseFloat(leoBalance + sarahBalance));

console.log(owed);

/* Trying to remove the extra lines in a given string
using the replaceAll method
*/

// let leoSurname.trimEnd();
// sarahName.trimEnd();

// console.log(leoSurname.replace(/\s/g,""));
// console.log(sarahName.replace(/\s/g,""));

const leo = `${leoName} ${leoSurname.trimEnd()} (Owed: R ${leoBalance})`;

console.log(leo);

const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed: R ${sarahBalance})`;

console.log(sarah);

const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)