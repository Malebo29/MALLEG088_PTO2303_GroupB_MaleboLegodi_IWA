const order1 = document.querySelector('[data-key="order1"]');
console.log(order1);

const biscuits1 = order1.getAttribute('data-biscuits');
const donuts1 = order1.getAttribute('data-donuts');
const pancakes1 = order1.getAttribute('data-pancakes');
const status1 = order1.getAttribute('data-delivered');

order1.children[0].children[1].innerHTML = biscuits1
order1.children[1].children[1].innerHTML = donuts1
order1.children[2].children[1].innerHTML = pancakes1
order1.children[3].children[1].innerHTML = status1 ? 'Delivered' : 'Pending'

const order2 = document.querySelector('[data-key="order2"]');
console.log(order2);

const biscuits2 = order2.getAttribute('data-biscuits');
const donuts2 = order2.getAttribute('data-donuts');
const pancakes2 = order2.getAttribute('data-pancakes');
const status2 = order2.getAttribute('data-delivered');

order2.children[0].children[1].innerHTML = biscuits2
order2.children[1].children[1].innerHTML = donuts2
order2.children[2].children[1].innerHTML = pancakes2
order2.children[3].children[1].innerHTML = status1 ? 'Delivered' : 'Pending'

const order3 = document.querySelector('[data-key="order3"]');
console.log(order3);

const biscuits3 = order3.getAttribute('data-biscuits');
const donuts3 = order3.getAttribute('data-donuts');
const pancakes3 = order3.getAttribute('data-pancakes');
const status3 = order3.getAttribute('data-delivered');

order3.children[0].children[1].innerHTML = biscuits3
order3.children[1].children[1].innerHTML = donuts3
order3.children[2].children[1].innerHTML = pancakes3
order3.children[3].children[1].innerHTML = status3 ? 'Delivered' : 'Pending'

/* Used the querySelector method to access data attributes of the three order groups.
*  Used the getAttribute method on the orders variables (order1, order2 and order3) to access the items of each order. 
*  From each order element, accessed the 1st, 2nd, 3rd, and 4th Children then 
*  Accessed their first children and used innerHTML to render out the content of the assigned data attribute value.
*/