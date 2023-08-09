const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

console.log(data.lists)

// Only edit below

// const first = Math.max.apply(null, data.lists[0][1])  // using the Math.max() method to find the the largest value in the lists array of the data object.
// console.log(first)

// const second = Math.max.apply(null, data.lists[1][1])
// console.log(second)

// const third = Math.max.apply(null, data.lists[2][1])
// console.log(third)

const { first = Math.max.apply(null, data.lists[0][1]) } = data.first || {}
const { second = Math.max.apply(null, data.lists[1][1]) } = data.second || {}
const { third = Math.max.apply(null, data.lists[2][1]) } = data.third || {}

console.log(first)
console.log(second)
console.log(third)

const result = []

const extractBiggest = () => {    // Math.max()
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)