import Product from './modules/classProduct.js'
import printProduct from './modules/printProduct.js'
import { getFromLocalStorage, saveToLocalStorage } from './modules/localStorage.js'

let listArray = []

addEventListener('load', () => {
    const list = getFromLocalStorage()

    if (!list) {
        saveToLocalStorage(listArray)
        return
    }

    if (list.length > 0) {
        listArray = list
        list.forEach( e => {
            printProduct(e)
        })
    }
})

const buttonAddProd = document.getElementById('insert-button')
buttonAddProd.addEventListener('click', () => {
    const input = document.getElementById('insert-input')

    if (!input.value) {
        alert('Por favor preencha o campo')
        return
    }

    const list = getFromLocalStorage()
    const prod = new Product(input.value)
    printProduct(prod)
    
    list.push(prod)
    saveToLocalStorage(list)
    
    input.value = ''
})