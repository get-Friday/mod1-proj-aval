import priceProduct from "./priceProduct.js"

class Product {
    name
    price
    printProduct(prod) {
        const uniqueId = Math.floor(Math.random() * 9999)
        
        const parentDiv = document.getElementById('list-container')

        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        const button = document.createElement('button')
        const span = document.createElement('span')
        const containerDiv = document.createElement('div')

        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('value', prod.price)
        checkbox.setAttribute('id', uniqueId)
        checkbox.addEventListener('click', () => {
            // Função responsável pela alteração do preço do produto
            console.log('ouviu o click')
            priceProduct(prod)
        })

        span.className = 'chkbox'
        
        label.setAttribute('for', uniqueId)
        label.appendChild(checkbox)
        label.appendChild(span)
        label.append(prod.name)
        
        button.setAttribute('type', 'button')
        button.setAttribute('id', uniqueId)
        button.innerHTML = '&times;'

        containerDiv.appendChild(label)
        containerDiv.appendChild(button)

        parentDiv.appendChild(containerDiv)
    }
    constructor(name, price = 0) {
        this.name = name
        this.price = price
    }
}

export default Product