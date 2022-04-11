import Product from './modules/classProduct.js'

const button = document.getElementById('insert-button')
button.addEventListener('click', () => {
    const name = document.getElementById('insert-input').value
    const prod = new Product(name)
    prod.printProduct(prod)
})