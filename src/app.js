import Product from './modules/classProduct.js'

let listArray = []
// addProd removeProd localStorage

const buttonAddProd = document.getElementById('insert-button')
buttonAddProd.addEventListener('click', () => {
    const input = document.getElementById('insert-input')

    if (!input.value) {
        alert('Por favor preencha o campo')
        return
    }

    const prod = new Product(input.value)
    prod.printProduct(prod)
    listArray.push(prod)
    
    input.value = ''
})