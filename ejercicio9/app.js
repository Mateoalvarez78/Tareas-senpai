
const contenedor = document.querySelector('.lista')
const name = document.querySelector('.name')
const lastName = document.querySelector('.lastName')
const button = document.querySelector('.agregarLista')
button.addEventListener('click', (e) => {

let persona = {
        nombre : this.name ,
        apellido : lastName.value
    }
    
    const div = document.createElement("p")
    div.textContent(persona.nombre)

    contenedor.appendChild(div)


})

let objeto = []

const agregarPersona = () => {

    
}
    