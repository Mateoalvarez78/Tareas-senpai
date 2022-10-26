let numeros = prompt("Ingrese números");
let numeros2 = prompt("Ingrese números de nuevo");

const comprobarLargo = (a,b) => {

    let comprobarA = a.split(",")
    let comprobarB = b.split(",")

    console.log("Comprobar a:: ", comprobarA)
    console.log("Comprobar b:: ", comprobarB)

    if (comprobarA.length > comprobarB.length){
        return console.log("El primer ingreso es más largo")
    }

    else if (comprobarA.length < comprobarB.length){
        return console.log("El segundo ingreso es más largo")
    }

    else{
        return console.log("Son iguales")
    }

}

comprobarLargo(numeros, numeros2)