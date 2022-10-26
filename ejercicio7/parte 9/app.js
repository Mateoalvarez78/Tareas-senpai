let arr = [1,2,3,4,5,6,7,8, 9,10];

const arregloALaMitad = (arreglo) => {

    let mitadArray = arreglo.length / 2
    let primerMitad = arreglo.splice(0,mitadArray)
    let losDosArrays = []
    
    losDosArrays.push(primerMitad, arreglo)
    return losDosArrays
}

console.log(arregloALaMitad(arr))