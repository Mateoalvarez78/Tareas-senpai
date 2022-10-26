const array = [2, 13, 15, -15, 2, 23, 55, -11, 90, 32, 0]

const promedioEnRango = (a, b, arreglo) => {

    let rango = arreglo.splice(a, b)

    let promedioDelRango = rango.reduce((a,b) => {
        return a + b
    })
    console.log(rango)
    return promedioDelRango / rango.length
}

console.log(promedioEnRango(3, 2, array))