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

const status = document.getElementsByClassName('status')
const reserve = document.getElementsByClassName('reserve')
const checkout = document.getElementsByClassName('checkout')
const checkin = document.getElementsByClassName('checkin')

checkin[0].style.color = ''
status[0].style.color = STATUS_MAP.overdue.color
reserve[0] = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled'
checkout[0] = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled'
checkin[0]= STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled'

console.log(reserve[0])
console.log(checkout[0])
console.log(checkin[0])

checkin[1].style.color = ''
status[1].style.color = STATUS_MAP.reserved.color


reserve[1] = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
checkout[1] = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
checkin[1] = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'

checkin[2].style.color = ''
status[2].style.color = STATUS_MAP.shelf.color

reserve[2] = STATUS_MAP.shelf.canReserver ? 'enabled' : 'disabled'
checkout[2] = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
checkin[2] = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'