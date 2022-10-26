
const fibonacci = (numero) => {

    let numeros = []
    let acumulador = 0

    for(let i = 1; i <= numero + 1; i++){

        numeros.push(acumulador)

        if(numeros.length > 1) {
            acumulador = numeros[i - 1] + numeros[i - 2]
        }
        else{
            acumulador = i
        }
    }

    return console.log(numeros[numeros.length -1])
}

fibonacci(11)