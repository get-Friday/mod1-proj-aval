class Product {
    name
    price
    checked
    constructor(name, price = 0, checked = false) {
        this.name = name
        this.price = price
        this.checked = checked
    }
}

export default Product