
let numero = parseInt(prompt("Ingrese un numero"))

const mostrarAumento = (limite) => {
    
    for(let i = 0; i <= limite; i += 2){
        console.log(i)
    }
}

mostrarAumento(numero)