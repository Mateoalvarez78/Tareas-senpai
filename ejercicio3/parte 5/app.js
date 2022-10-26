let numero = prompt("Ingrese un numero")
let arrayDeNumero = numero.split("").map((item) => parseInt(item))

let resutado = arrayDeNumero.reduce((a, b) =>{ 
    return a + b
})
