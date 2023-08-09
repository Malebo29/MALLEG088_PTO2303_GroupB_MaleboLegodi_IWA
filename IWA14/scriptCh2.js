// because we are adding a + b together, the variable 'a' and 'b' for both functions are put in brackets to pass them inside their functions
// multiple parameters

const add = (a, b) => a + b
const multiply = (a, b) => a - b

// function add(a, b) {
// 	return a + b;
//   }

//   function multiply(a, b) {
// 	return a - b;
//   }

console.log(add (3, 7));
console.log(multiply (8, 2));

function internal (add, multiply) {
	this.add = (this.a + this.b)
	this.multiply = (this.a - this.b)
	return internal;
}

// function Internal () {					// Constructor Function used to create objects
// 	const added = this.add(this.a + this.b)
// 	this.multiply(this.a - this.b)
// 	return added;
// }

// const internal = () => {
// 	const added = this.add(this.a, this.b)
// 	this.multiply(this.a, this.b)
// 	return added;
// }

console.log(internal());

// function internal () {
// 	this.add = (this.a, this.b)
// 	this.multiply = (this.a, this.b)
// 	// return internal;
// }

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()