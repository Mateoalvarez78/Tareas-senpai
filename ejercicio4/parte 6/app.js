
let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))

const sumarNumeros = (a, b) => {

    let acumulador = 0; 

    for(let i = a; i <= b; i++ ){
        acumulador += i
    }

    return acumulador
}

console.log(sumarNumeros(numero1, numero2))