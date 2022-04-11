class Print {
    name
    
}

const instancePrint = (name, prod) => {
    const print = new Print(name)
    print.printProduct(prod)
}

export default instancePrint