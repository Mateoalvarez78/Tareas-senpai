
let numero = parseInt(prompt("Ingrese un numero limite"))

const mostrarAumento = (limite) => {
    let acumulador = 1
    for(let i = 0; i < limite; i++){
        console.log(acumulador)
        acumulador++
    }
}

mostrarAumento(numero)