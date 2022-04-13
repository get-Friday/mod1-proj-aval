import { getFromLocalStorage, saveToLocalStorage, updateCheckedAttribute } from "./localStorage.js"
import modalQuery from "./modalQuery.js"
import printPurchaseAmount from "./printPurchaseAmount.js"

const printProduct = (prod) => {
    const uniqueId = Math.floor(Math.random() * 9999)
    const parentDiv = document.getElementById('list-container')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const button = document.createElement('button')
    const span = document.createElement('span')
    const containerDiv = document.createElement('div')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', prod.price)
    checkbox.setAttribute('id', `${uniqueId}Checkbox`)
    checkbox.addEventListener('change', () => {
        checkItem(uniqueId, prod)
    })

    if (prod.checked) {
        checkbox.checked = true
    }

    span.className = 'chkbox'
    
    label.setAttribute('for', `${uniqueId}Button`)
    label.appendChild(checkbox)
    label.appendChild(span)
    label.append(prod.name)
    
    button.setAttribute('type', 'button')
    button.setAttribute('id', `${uniqueId}Button`)
    button.innerHTML = '&times;'
    button.addEventListener('click', () => {
        removeProduct(prod.name, containerDiv)
    })

    // div>label>(input:checkbox+span.chkbox)+button
    containerDiv.appendChild(label)
    containerDiv.appendChild(button)
    parentDiv.appendChild(containerDiv)
}

const removeProduct = (productName, listHTMLElement) => {
    const array = getFromLocalStorage()
    const removedItem = array.filter(e => e.name != productName)

    saveToLocalStorage(removedItem)
    printPurchaseAmount()
    listHTMLElement.remove()
}

const checkItem = (elementId, productObject) => {
    const checked = document.getElementById(`${elementId}Checkbox`).checked

    if (checked) {
        // Função responsável pela alteração do preço do produto
        updateCheckedAttribute(productObject.name, true)
        modalQuery(productObject, elementId)
    } else {
        updateCheckedAttribute(productObject.name, false)
        printPurchaseAmount()
    }
}

export default printProduct