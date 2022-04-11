import Product from './modules/classProduct.js'

const button = document.getElementById('insert-button')
button.addEventListener('click', () => {
    const input = document.getElementById('insert-input')

    if (!input.value) {
        alert('Por favor preencha o campo')
        return
    }

    const prod = new Product(input.value)
    prod.printProduct(prod)
    
    input.value = ''
})