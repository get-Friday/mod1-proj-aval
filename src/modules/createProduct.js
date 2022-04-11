const createProduct = (name) => {
    const fatherDiv = document.getElementById('list-container')

    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const button = document.createElement('button')
    const containerDiv = document.createElement('div')

    // <input type="checkbox" value="${price}" id="name-list-product">
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', 0)
    checkbox.setAttribute('id', `${name}-list-product`)

    // <label for="name-product">
    label.setAttribute('for', `${name}-product`)
    label.innerHTML = name

    // <button type="button" id="name-list-button">
    button.setAttribute('type', 'button')
    button.setAttribute('id', `${name}-list-button`)
    button.innerHTML = '✓'

    containerDiv.appendChild(checkbox)
    containerDiv.appendChild(label)
    containerDiv.appendChild(button)
    fatherDiv.appendChild(containerDiv)
}

export default createProduct