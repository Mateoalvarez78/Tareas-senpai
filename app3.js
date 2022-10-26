

const invertirCadena = (string) => {

    let invertido = string.split("").reverse().join("")
    
    return invertido

}


console.log(invertirCadena("si si si, mi nombre es Mateo, el tuyo es?"))