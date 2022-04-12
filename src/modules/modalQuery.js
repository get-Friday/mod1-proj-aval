const modalQuery = product => {
    const modalDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const separatorDiv = document.createElement('div')
    const span = document.createElement('span')
    const input = document.createElement('input')
    const label = document.createElement('label')
    const button = document.createElement('button')

    modalDiv.setAttribute('id', 'modal')
    contentDiv.setAttribute('class', 'modal-content')

    span.setAttribute('class', 'modal-close')
    span.innerHTML = '&times;'

    label.innerHTML = `Valor de ${product.name}`    
    input.setAttribute('placeholder', '0,00')

    button.innerHTML = 'Inserir'

    // #modal>.modal-content>div>(label+input+button)+span)
    document.body.appendChild(modalDiv)
    modalDiv.appendChild(contentDiv)
    contentDiv.appendChild(separatorDiv)
    separatorDiv.appendChild(label)
    separatorDiv.appendChild(input)
    separatorDiv.appendChild(button)
    contentDiv.appendChild(span)

    span.addEventListener('click', () => {
        modalDiv.remove()
    })

    button.addEventListener('click', () => {
        modalDiv.remove()
    })
}

export default modalQuery