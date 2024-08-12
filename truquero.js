// TERCERA CLASE KEVIN JS CREANDO BOTONES AUTOMATICAMENTE Y EJEMPLO DE LIBRERIA
export const elementCreator = (element, id, classID, display) => {
    const newElement = document.createElement(element)
    newElement.id = id
    newElement.classList.add(classID)
    newElement.innerText = display

    return newElement
}