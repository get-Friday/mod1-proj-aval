class Product {
    name
    price
    constructor(name, price = 0) {
        this.name = name
        this.price = price
    }
}

const instanceProduct = (name) => {
    const prod = new Product(name)
    return prod
}

export default instanceProduct