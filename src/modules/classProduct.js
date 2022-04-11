class Product {
    name
    price
    printProduct(prod) {
        const fatherDiv = document.getElementById('list-container')

        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        const button = document.createElement('button')
        const span = document.createElement('span')
        const containerDiv = document.createElement('div')
        
        // <input type="checkbox" value="${price}" id="name-list-product">
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('value', prod.price)
        checkbox.setAttribute('id', `${prod.name}-list-product`)

        // <span class='chkbox'>
        span.className = 'chkbox'
        
        // <label for="name-product">
        label.setAttribute('for', `${prod.name}-product`)
        
        // <button type="button" id="name-list-button">
        button.setAttribute('type', 'button')
        button.setAttribute('id', `${prod.name}-list-button`)
        button.innerHTML = '✓'
        
        label.appendChild(checkbox)
        label.appendChild(span)
        label.append(prod.name)

        containerDiv.appendChild(label)
        containerDiv.appendChild(button)

        fatherDiv.appendChild(containerDiv)
    }
    constructor(name, price = 0) {
        this.name = name
        this.price = price
    }
}

export default  Product