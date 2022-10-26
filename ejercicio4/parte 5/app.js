
let numero = prompt("Ingrese un numero")

const encontrarError = (valor) => {

    let array = valor.split("").map((item) => {
        return Number(item)
    })
    
    let resultado = array.reduce((a,b) => {
        return a + b
    })

    if(resultado.toString() === "NaN"){
        alert("Hay letras")
    }

    console.log(resultado)
}

encontrarError(numero)