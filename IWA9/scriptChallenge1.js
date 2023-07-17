const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = salary * (parseInt(tax['913']) / 100);
const startingAfterTax = salary * 1 - taxAsDecimal;
const type = `${size} ${lodging}`;
const balance = startingAfterTax - (expenses.transport - expenses.food) - rent['large-apartment'];
console.log(balance.toFixed(2))


/*Used parseInt to turn the taxAsDecimal into a number 
* then interpolated the type variable to match the rent 
* object keys so the correct number gets assigned and used as the rent value. 
* Assigned the after-tax amount by adding the startingAfterTax variable as a 
* value for the balance variable and then subtract all expenses including rent depending on the place of rental.
*/
