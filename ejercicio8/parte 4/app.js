
const arrayPersonas = () => {
    let personas = []

    let cantPersonas = parseInt(prompt("Cuantas personas va a agregar?"))

    for(let i = 0; i < cantPersonas; i++){
        let persona = {
            nombre : prompt("Ingrese nombre"),
            edad : parseInt(prompt("Ingrese edad"))
        };

        personas.push(persona)
    }
    return personas
}

console.log(arrayPersonas())