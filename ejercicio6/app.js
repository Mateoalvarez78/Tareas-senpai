
let numero = prompt("Ingrese numero")

let array2 = Array.from(numero).map((item) => {
    return Number(item)
})

console.log(array2)