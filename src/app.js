import Product from './modules/classProduct.js'
import { getFromLocalStorage, saveToLocalStorage } from './modules/localStorage.js'

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
    listArray.push(prod)
    prod.printProduct(prod)
    
    saveToLocalStorage(listArray)
    
    input.value = ''
})

addEventListener('load', () => {
    console.log(getFromLocalStorage())
})