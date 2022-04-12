import Product from './modules/classProduct.js'
import printProduct from './modules/printProduct.js'
import { getFromLocalStorage, saveToLocalStorage } from './modules/localStorage.js'

let listArray = []
const buttonAddProd = document.getElementById('insert-button')

addEventListener('load', () => {
    const list = getFromLocalStorage()

    // Instância array vazio no localStorage
    if (!list) {
        saveToLocalStorage(listArray)
        return
    }

    // Imprime array do localStorage na lista
    if (list.length > 0) {
        listArray = list
        list.forEach( e => {
            printProduct(e)
        })
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