import { html, createOrderHtml, moveToColumn, updateDraggingHtml } from "./view.js";
import { createOrderData, state, COLUMNS, updateDragging } from "./data.js";

state.orders.orders = [];
let edittedOrderId = '';

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const handleDragStart = (event) => {
    event.preventDefault();

    // event.target.classList.add('dragging');

}

const handleDragEnd = (event) => {
    event.preventDefault();

    // event.target.classList.remove('dragging');
}


const handleHelpToggle = (event) => {
    event.preventDefault()
    const target = event.target
    const helpOverlay = html.help.overlay
    switch (target) {
        case html.other.help:
            helpOverlay.setAttribute('open', 'open')
            break
        case html.help.cancel: {
          helpOverlay.removeAttribute('open')  
          html.other.add.focus()
    }
        break
    };
}

const handleAddToggle = (event) => {
    event.preventDefault()
    const target = event.target
    const orderOverlay = html.add.overlay
    switch (target) {
        case html.other.add:
            orderOverlay.setAttribute('open', 'open')
            break
        case html.add.cancel: {
            orderOverlay.removeAttribute('open')
            const titleInput = document.querySelector('[data-add-title]')
            titleInput.value = ''
            const tableInput = document.querySelector('[data-add-table]')
            tableInput.value = '1'
            html.other.add.focus()
        }
            break
    };
};

const handleAddSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    let title = data.get('title')
    let table = data.get('table')
    const column = 'ordered'
    const order = createOrderData({title, table, column})
    state.orders.orders.push(order)

    const orderHtml = createOrderHtml(order)
    console.log(orderHtml)
    html.columns.ordered.appendChild(orderHtml)
        
    const titleInput = document.querySelector('[data-add-title]')
    titleInput.value = ''
    const tableInput = document.querySelector('[data-add-table]')
    tableInput.value = '1'
    const submitOverlay = html.add.overlay
    submitOverlay.removeAttribute('open')
    html.other.add.focus()
}

// can you hear me?

const handleEditToggle = (event) => {
    event.preventDefault()
    const orderId = event.target.getAttribute('data-id');
    const editOrder = html.edit.overlay
    const editForm = html.edit.form

    switch (event.target) {
        case html.edit.cancel: {
            editOrder.removeAttribute('open')       
            html.other.add.focus()  
        }
        break

        default:{
            const order = state.orders.orders.filter((order) => order.id == orderId);           
            html.edit.overlay.setAttribute('open', 'open')
            edittedOrderId = order[0].id;
            editForm.querySelector('[data-edit-title]').value = order[0].title;
            editForm.querySelector('[data-edit-table]').options[order[0].table - 1].selected = true;
            editForm.querySelector('[data-edit-column]').options[COLUMNS.indexOf(order[0].column)].selected = true;
        }
    }
};

const handleEditSubmit = (event) => {
    event.preventDefault()
    const editData = new FormData(event.target)
    let title = editData.get('title')
    let table = editData.get('table')
    let column = editData.get('column')

    if(event.target){
        const orderParentElement = document.querySelector('[data-id]')
        if(orderParentElement.getAttribute('data-id') == edittedOrderId){
            const orderTitle = orderParentElement.children.item(0)
            orderTitle.innerHTML = title
            const orderTable = orderParentElement.children.item(1).children.item(0).children.item(1)
            orderTable.innerHTML = table
            moveToColumn(edittedOrderId, column)
            const orderStatus = state.orders.orders.filter((order) => order.id == edittedOrderId)[0];
            orderStatus.title = title
            orderStatus.table = table
            orderStatus.column = column
        }
    }

    edittedOrderId = ''
    const submitOverlay = html.edit.overlay
    submitOverlay.removeAttribute('open')
    html.other.add.focus()
};

const handleDelete = (event) => {
    event.preventDefault()
    const editOrderItem = state.orders.orders.filter((order) => order.id == edittedOrderId)[0];
    state.orders.orders.pop(editOrderItem)
    const editOrderItemHtml = document.querySelector('[data-id]')
    if(editOrderItemHtml.getAttribute('data-id') == edittedOrderId){
    editOrderItemHtml.remove()
    }    

    const editOverlay = html.edit.overlay
    editOverlay.removeAttribute('open')
    html.other.add.focus()
};

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}