let array = ["hola", "ola", "mañana", "indio", "azul", "noche", "luna","ondina", "almohada"]
const vocales = ["a", "e", "i", "o", "u"]

let array2 = []

const respuesta = (arreglo) => {

    for(let i = 0; i<vocales.length; i++) {

        arreglo.forEach((item) => {
        if (item.charAt(0) == vocales[i]){
            array2.push(item)
        }
    })
    }

}

respuesta(array)
console.log(array2)