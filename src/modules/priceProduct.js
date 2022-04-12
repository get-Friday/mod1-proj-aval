import { getFromLocalStorage, saveToLocalStorage } from "./localStorage.js"

const priceProduct = async (newValue, productName) => {
    const array = getFromLocalStorage()
    const filtered = array.filter(e => e.name == productName)
    const newArray = array.filter(e => e.name != productName)
    
    filtered[0].price = newValue
    newArray.push(filtered[0])
    saveToLocalStorage(newArray)
}

export default priceProduct