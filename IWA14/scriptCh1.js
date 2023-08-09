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

/* First i added the statement parameter of the logTwice function into in the event handler function 
*  so it can be declared before being used. I then executed the parameter statement twice while renaming 
*  the hobby function to newHobby because hobby is already declared as a variable.
*/