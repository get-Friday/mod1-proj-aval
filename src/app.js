import createProduct from "./modules/createProduct.js"

const button = document.getElementById('insert-button')
button.addEventListener('click', () => {
    const name = document.getElementById('insert-input').value
    createProduct(name)
})