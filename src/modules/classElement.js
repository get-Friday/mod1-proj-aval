// This class is responsible for creating HTML elements and its attributes
class HTMLAttribute {
    key
    value
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class HTMLElement {
    name
    attributeList
    addAttribute(attribute) {
        if (!(attribute instanceof HTMLAttribute)) {
            return
        }

        if (this.attributeList.includes(attribute)) {
            return
        }

        this.attributeList.push(attribute)
    }
    constructor(name) {
        this.name = name
    }
}

export { HTMLAttribute, HTMLElement }