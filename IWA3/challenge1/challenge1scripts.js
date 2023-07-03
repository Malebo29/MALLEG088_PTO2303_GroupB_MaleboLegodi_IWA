/* Issues with the code: 
wrong spelling of the word 'from' and incorrect way of importing the configuration.js file.
single quotes used instead of double quotes to concatenate strings and variables.
*/

import { company, year } from './configuration.js'

// console.log(company, year);

const message = "© " + company + " ( " + year + ")"
document.querySelector("footer").innerText = message;

console.log(message);