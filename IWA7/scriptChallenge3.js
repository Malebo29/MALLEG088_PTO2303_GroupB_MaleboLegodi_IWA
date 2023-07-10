const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(leoBalance + sarahBalance);
const leo = `${leoName} ${leoSurname.trimEnd()} (Owed: R ${(leoBalance*-1).toFixed(2)})`;
const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed: R ${(sarahBalance*-1).toFixed(2)})`;
const total = Number((leoBalance*-1).toFixed(2)) + Number((sarahBalance*-1).toFixed(2));
const newLine = "\n"
const result = leo + newLine + sarah + newLine + newLine + divider + newLine + '  Total amount owed: R ' + total + newLine + divider;

console.log(result);