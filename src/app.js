import Product from './modules/classProduct.js'
import printProduct from './modules/printProduct.js'
import { getFromLocalStorage, saveToLocalStorage } from './modules/localStorage.js'
import printPurchaseAmount from './modules/printPurchaseAmount.js'

const buttonAddProd = document.getElementById('insert-button')

addEventListener('load', () => {
    const list = getFromLocalStorage()

    // Instancia array vazio no localStorage
    if (!list) {
        saveToLocalStorage([])
        return
    }

    // Imprime array do localStorage na lista
    if (list.length > 0) {
        list.forEach( e => {
            printProduct(e)
        })
        printPurchaseAmount()
    }
})

buttonAddProd.addEventListener('click', () => {
    const input = document.getElementById('insert-input')
    const list = getFromLocalStorage()
    const prod = new Product(input.value)

    if (!input.value) {
        alert('Por favor preencha o campo')
        return
    }

    printProduct(prod)
    
    list.push(prod)
    saveToLocalStorage(list)
    
    input.value = ''
})