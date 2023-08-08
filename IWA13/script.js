let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated !== 'numerical-string'; // used the Is Not !== to make a true value
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated = Number(calculatedAsNumber*-1) + 1;
    return logCalc;
};

const calcUser = () => {
  logCalc();
  if (calculated > 2) user === 'John';
  if (calculated > 2) state === 'requesting';
  if (calculated > 3) state === 'idle';
  return calcUser;
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()