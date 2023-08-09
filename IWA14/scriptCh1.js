const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function newHobby () {
  console.log(logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`))
}

newHobby()

/* To use the statement parameters, they first needed to be declared
*  to work as event handler function for the logTwice() function.
*  To get the 2 lines executed, console.log was also added to the statement parameters.
*/