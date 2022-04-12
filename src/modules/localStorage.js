const saveToLocalStorage = array => {
    localStorage.setItem('Compras', JSON.stringify(array))
}

const getFromLocalStorage = () => JSON.parse(localStorage.getItem('Compras'))

export { saveToLocalStorage, getFromLocalStorage }