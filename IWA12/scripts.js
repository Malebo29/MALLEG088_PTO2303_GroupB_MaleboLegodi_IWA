const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// Book 1

const book1 = document.querySelector('#book1')
console.log(book1)

const status1 = document.querySelector('.status')      // child 0
const reserve1 = document.querySelector('.reserve')     // child 1
const checkout1 = document.querySelector('.checkeout')     // child 2
const checkin1 = document.querySelector('.checkin')         // child 3

console.log(status1)

// checkin1[0].color = ''
// status1[0].style.color = STATUS_MAP.status.color
// reserve1[0] = STATUS_MAP.status.canReserver ? enabled : disabled
// checkout1[0] = STATUS_MAP.status.canCheckout ? enabled : diabled
// checkin1[0] = STATUS_MAP.status.canCheckIn ? enabled : disabled


// Book 2

const book2 = document.querySelector('#book2')
console.log(book2)

// const status2 = book2.querySelector(status)
// const reserve2 = book2.querySelector(reserve)
// const checkout2 = book2.querySelector(checkout)
// const checkin2 = book2.querySelector(checkin)

// checkin2[1].color = none
// status2[1].style.color = STATUS_MAP.status.color
// reserve2[1] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout2[1] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin2[1] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// Book 3

const book3 = document.querySelector('#book3')
console.log(book3)

// const status3 = document.querySelector(status2)
// const reserve3 = document.querySelector(reserve2)
// const checkout3 = document.querySelector(checkout2)
// const checkin3 = document.querySelector(checkin2)

// checkin2[2].color = none
// status2[2].style.color = STATUS_MAP.status.color
// reserve2[2] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout2[2] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin2[2] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'