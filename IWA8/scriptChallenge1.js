const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name : leoName,
	balance : Number(leoBalance*-1),
    accessID : '47afb389-8014-4d0b-aff3-e40203d2107f',
	age : 24,
	address : {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal,
	}
}

const sarah = {
	name : sarahName.trim() + sarahSurname,
	age : 62,
    accessID : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : Number(sarahBalance*-1).toFixed(2),
	address : {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,
	}
}

sarah['name'] = 'Sarah Kleinhans'

console.log(leo, leo['address']['postalCode'])
console.log(sarah, sarah['address']['postalCode'])

/* The code wasnt working because declared variable
   were trying to be redeclared with the equal signs (=).
*/

/* Changes made to achieve the intended behavior
* Fixed up all the problems by replacing all equal signs with 
  semi colons (:) to assign nested objects to the key and 
  then removed extra spaces and negative balances.
* Changed the access id and postal-code to camelCase.
* changed the property of the name object of sarah so the 
  extra space is added by using square brackets.
* changed the property of the name object of sarah so the 
  extra space is added by using square brackets, also added 
  comments regarding the case statement of WHY and HOW.
*/

// Why code didnt work - Because of all the above applied solutions.

// Yes there are other ways this could have been solved.