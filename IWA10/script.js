const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if(futureId === holidays.id){}
console.log(holidays.name || `ID ${futureId} not created yet`);
// console.log(holidays.futureId || `ID ${futureId} not created yet`)

let copied = holidays[christmas]
copied.name = 'X-mas'
let correctDate = copied.date
correctDate.setHours(0)
correctDate.setMinutes(0)

let isEarlier = copied.date <= holidays[6].date
console.log('New date is earlier:', isEarlier)
// if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id !== copied.id ? true : false)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', correctDate.toLocaleDateString("en-GB"))

// holidays[0].date = new Date(`16 December ${currentYear}`);

holidays[0].date = new Date (`16 December ${currentYear}`);
// console.log(holidays[0].date)
// console.log(typeof holidays[0].date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
// console.log(firstHolidayTimestamp)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
// console.log(lastHolidayTimestamp)

const firstDay = new Date (firstHolidayTimestamp).getDate().toString().padStart(2,0);
// console.log(firstDay)
const firstMonth = new Date(firstHolidayTimestamp).getMonth().toString().padStart(1,0) + 1;
// console.log(firstMonth)
const lastDay = new Date(lastHolidayTimestamp).getDate();
// console.log(lastDay)
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;
// console.log(lastMonth)

const randomHoliday = holidays[Math.round(Math.random() * 8)]
console.log(randomHoliday.date.toLocaleDateString("en-GB"));



/* worked on the code to define all the undifined variables copied and correctDate, 
*  also correctly set the minute and hour of the correctDate to 0.
*  Changed the equal sign operator to an comparison Operators (less than or equal to) <=
*  changed the equal sign operator to comparison Operators - less than or equal to - 
*  to check if the new date is earlier than the current date.
*  Also updated the code to evaluate if copiedID is different from the original chrismasID 
   value then return if truthy or falsy.
*/