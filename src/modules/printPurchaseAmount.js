import { getFromLocalStorage } from "./localStorage.js"

const printPurchaseAmount = () => {
    const array = getFromLocalStorage()
    const purchaseTotal = document.getElementById('purchase-total')
    let total = 0

    array.forEach(e => {
        if (e.checked == true) {
            total += Number.parseFloat(e.price)
        }
    })

    purchaseTotal.innerHTML = `R$ ${total.toFixed(2)}`
}

export default printPurchaseAmount