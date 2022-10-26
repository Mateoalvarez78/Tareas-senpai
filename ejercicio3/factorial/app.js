

const devolverResultadoFactorial = (numero) => {
    let numeros = []
    for(let i = 1; i <=numero; i++){
        numeros.push(i)
    }

   let resultado = numeros.reduce((a,b)=> {
        return a * b
    })

    return resultado
}

console.log(devolverResultadoFactorial(12))