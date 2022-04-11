import instanceProduct from './modules/classProduct.js'
import instancePrint from './modules/classPrint.js'

const button = document.getElementById('insert-button')
button.addEventListener('click', () => {
    const name = document.getElementById('insert-input').value
    const prod = instanceProduct(name)
    instancePrint(name, prod)
})