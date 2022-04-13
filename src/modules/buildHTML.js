const buildHTML = elementToBuild => {
    const element = document.createElement(elementToBuild.name)

    elementToBuild.attributeList.forEach(e => {
        element.setAttribute(e.key, e.value)
    })

    return element
}

export default buildHTML