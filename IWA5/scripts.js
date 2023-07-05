const FREE_WARNING = "Free shipping only applies to single customer orders"
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let total = shoes + toys + shirts + batteries + pens;
let customers = 1;
let location = 'RSA';
let currency = 'R';
let shipping = 800;

if (location === 'RSA') { 
shipping = 400;
currency === 'R';
}

if (location === 'NAM') { 
shipping = 600;
currency === '$';
}

if (total >= 1000 && currency === 'R' || total >= 60 && currency === '$' ) { shipping = 0 
}

if (shipping === 0 && customers !== 1) { 
console.log(FREE_WARNING);
}

if (shipping === 'NK') { 
console.log(BANNED_WARNIN);
}
else {
        console.log('Price:', currency, total + shipping);
}