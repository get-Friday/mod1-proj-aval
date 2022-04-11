class Print {
    name
    printProduct(prod) {
        const fatherDiv = document.getElementById('list-container')

        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        const button = document.createElement('button')
        const containerDiv = document.createElement('div')
    
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('value', prod.price)
        checkbox.setAttribute('id', `${prod.name}-product`)
    
        label.setAttribute('for', `${prod.name}-product`)
        label.innerHTML = prod.name
    
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'list-button')
        button.innerHTML = '✓'

        containerDiv.appendChild(checkbox)
        containerDiv.appendChild(label)
        containerDiv.appendChild(button)
        fatherDiv.appendChild(containerDiv)
    }
}

const instancePrint = (name, prod) => {
    const print = new Print(name)
    print.printProduct(prod)
}

export default instancePrint