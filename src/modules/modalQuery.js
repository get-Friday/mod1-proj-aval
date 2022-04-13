import { updateCheckedAttribute } from './localStorage.js'
import priceProduct from './priceProduct.js'
import printPurchaseAmount from './printPurchaseAmount.js'

const modalQuery = (product, uniqueId) => {
    const modalDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const separatorDiv = document.createElement('div')
    const span = document.createElement('span')
    const input = document.createElement('input')
    const label = document.createElement('label')
    const button = document.createElement('button')

    modalDiv.setAttribute('id', 'modal')
    contentDiv.setAttribute('class', 'modal-content')

    span.setAttribute('class', 'modal-close')
    span.innerHTML = '&times;'

    label.innerHTML = `Valor de ${product.name}`    
    input.setAttribute('type', 'number')
    input.setAttribute('placeholder', '0,00')

    button.innerHTML = 'Inserir'

    // #modal>.modal-content>div>(label+input+button)+span)
    document.body.appendChild(modalDiv)
    modalDiv.appendChild(contentDiv)
    contentDiv.appendChild(separatorDiv)
    separatorDiv.appendChild(label)
    separatorDiv.appendChild(input)
    separatorDiv.appendChild(button)
    contentDiv.appendChild(span)

    span.addEventListener('click', () => {
        const checkbox = document.getElementById(`${uniqueId}Checkbox`)
        
        checkbox.checked = false
        updateCheckedAttribute(product.name, false)
        modalDiv.remove()
    })

    button.addEventListener('click', () => {
        const price = parseFloat(input.value).toFixed(2)

        if (!price) {
            alert("Preencha o campo")
            return
        }

        if (isNaN(price)) {
            alert('Insira um número')
            return
        }

        if(price <= 0){
            alert('Insira um número positivo')
            input.value = ''
            return
        }
        
        modalDiv.remove()

        // Altera o preço do produto
        priceProduct(price, product.name)
        printPurchaseAmount()
    })
}

export default modalQuery