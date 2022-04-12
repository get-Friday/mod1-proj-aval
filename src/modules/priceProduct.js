import modalQuery from "./modalQuery.js"

const priceProduct = async (product, uniqueId) => {
    const price =  modalQuery(product)
    console.log(price)
}

export default priceProduct