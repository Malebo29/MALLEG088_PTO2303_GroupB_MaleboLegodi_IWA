const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = typeof number == primaryPhone 
// const primaryValid = primaryPhone.toString();
// const primaryValid = Number(primaryPhone) ? true: false;
// if(Number(primaryPhone)){primaryValid = true} else {primaryValid = false};
console.log('Primary phone is valid numerical string:', primaryValid);

// const secondaryValid = secondaryPhone.toString();

// const secondaryValid = typeof Number == secondaryPhone;
const secondaryValid = Number(secondaryPhone) ? true: false;
console.log('Secondary phone is valid numerical string:', secondaryValid);