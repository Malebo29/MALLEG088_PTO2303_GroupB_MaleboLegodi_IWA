const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay == null && minuteOfDay == null) {
	const taxAsDecimal = salary * tax / 100;
  const startingAfterTax = salary * 1 - taxAsDecimal;
	let balance = {startingAfterTax - transport - food - rent};
}
	
console.log("R" + balance.toFixed(2))