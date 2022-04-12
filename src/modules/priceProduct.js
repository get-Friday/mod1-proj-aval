import { getFromLocalStorage, saveToLocalStorage } from "./localStorage.js"

const priceProduct = async (price, productName) => {
    const array = getFromLocalStorage()
    const filtered = array.filter(e => e.name == productName)
    filtered[0].price = price

    const newArray = array.filter(e => e.name != productName)
    newArray.push(filtered[0])
    saveToLocalStorage(newArray)
}

export default priceProduct