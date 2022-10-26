const array = [2, 13, 15, -15, 2, 23, 55, -11, 90, 32, 0]

const promedio = (arreglo) => {

    const total = arreglo.reduce((a, b) => {
        return a + b
    })

    return total / arreglo.length

}

console.log(promedio(array))