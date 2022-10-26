let numero = parseInt(prompt("Ingrese un numero"))
let numerosDivisores = []

for(let i = 0; i < numero; i++){

    if(numero % i == 0){
        numerosDivisores.push(i)
    }
}

