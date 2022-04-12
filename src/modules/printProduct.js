import { getFromLocalStorage, saveToLocalStorage } from "./localStorage.js"
import modalQuery from "./modalQuery.js"

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
        const checked = document.getElementById(`${uniqueId}Checkbox`).checked
        if (checked) {
            // Função responsável pela alteração do preço do produto
            modalQuery(prod, uniqueId)
        }
    })

    span.className = 'chkbox'
    
    label.setAttribute('for', `${uniqueId}Button`)
    label.appendChild(checkbox)
    label.appendChild(span)
    label.append(prod.name)
    
    button.setAttribute('type', 'button')
    button.setAttribute('id', `${uniqueId}Button`)
    button.innerHTML = '&times;'
    button.addEventListener('click', () => {
        const listArray = getFromLocalStorage()
        const newArray = listArray.filter((e) => e.name != prod.name)

        saveToLocalStorage(newArray)
        containerDiv.remove()
    })

    // div>label>(input:checkbox+span.chkbox)+button
    containerDiv.appendChild(label)
    containerDiv.appendChild(button)
    parentDiv.appendChild(containerDiv)
}

export default printProduct