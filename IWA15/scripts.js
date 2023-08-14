const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

const [ first ]= [ data.lists[0][1], []]
const [ second ] = [ data.lists[1][1], []]
const [ third ] = [ data.lists[2][1], []]

const result = [first.concat(second, third)]

const extractBiggest = () => {    
	let maxNumber = -Infinity;
	let MaxIndex = -1;

	for (let i = 0; i < data.lists.length; i++){
		const array = data.lists[i][1];
		const lastValue = array[array.length -1];

		if (lastValue > maxNumber) {
			maxNumber = lastValue;
			MaxIndex = i;
		}
	}

	if (MaxIndex !== -1) {
		const maxValue = data.lists[MaxIndex][1].pop();
		return maxValue;
	}
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


/* Created a maxNumber variable and set it to Infinity, the lowest lowest possible number and 
   maxIndex variable for the index -1 that always checks the indexes from the last one in an array. 
*  Used a ‘for’ loop to loop through the data array and for each item, I set my array const to the 
   2nd index which is an array we want to check.
*  updating the maxNumber with our lastValue if it is greater than the maxNumber and since we in a 
   loop checking whether each last item of the array is greater than the last set value, we end up with 
   maxNumber equal to the largest value. This value is then pushed to the result array each time with the 
   call and pushes we're not editing. 
*  Finally, the If statement checks if our maxNumber is not -1, then 
   removing that value from the array concerned and returning that maxNumber from the function extraBiggest.
*/