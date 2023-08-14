// because we are adding a + b together, the variable 'a' and 'b' for both functions are put in brackets to pass them inside their functions
// multiple parameters

const add = (a, b) => a + b
const multiply = (a, b) => a - b

// function Internal() {
//  this.add = add // (this.a, this.b)
//  this.multiply = multiply // (this.a, this.b)
//  return this
// }

// function Internal() {
//   this.add = this.a + this.b
//   this.multiply = this.a - this.b
//       return this
//   }

function internal (add, multiply) {					// Constructor Function used to create objects
	this.add = add(this.a, this.b);
    this.multiply = multiply(this.a, this.b);
	return this;
}

console.log(internal())

// const calculate = internal();

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
};

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
};

console.log(example1.calculate());
console.log(example2.calculate());