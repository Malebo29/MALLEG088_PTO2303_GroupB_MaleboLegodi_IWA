const order1 = document.querySelector('[data-key="order1"]'); // checks for the value of the date-key
console.log(order1.dataset);
console.log(order1.dataset.biscuits); // get the property by the part of the attribute name after data-
console.log(typeof order1);

// const biscuits1 = document.querySelector(order1.dataset.biscuits);
const biscuits1 = document.querySelector('.biscuits');
const donuts1 = document.querySelector('.donuts');
const pancakes1 = document.querySelector('.pancakes');
const status1 = document.querySelector('.delivered');

console.log(biscuits1);



const order2 = document.querySelector('[data-key="order2"]');
console.log(order2.dataset);
console.log(typeof order2);

const biscuits2 = document.querySelector('.biscuits');
const donuts2 = document.querySelector('.donuts');
const pancakes2 = document.querySelector('.pancakes');
const status2 = document.querySelector('.delivered');

console.log(biscuits2);

const order3 = document.querySelector('[data-key="order3"]');
console.log(order3.dataset);
console.log(typeof order2);

const biscuits3 = document.querySelector('.biscuits');
const donuts3 = document.querySelector('.donuts');
const pancakes3 = document.querySelector('.pancakes');
const status3 = document.querySelector('.delivered');


biscuits1.order1.biscuits;
donuts1.order1.donuts;
pancakes1.pancakes;
status1 = order1.status ? Delivered : Pending;

biscuits2 = order2.biscuits;
donuts2 = order2.donuts;
pancakes2 = order2.pancakes;
status2 = order2.status ? Delivered : Pending;

biscuits3 = order3.biscuits;
donuts3 = order3.donuts;
pancakes3 = order3.pancakes;
status3 = order3.status ? Delivered : Pending;