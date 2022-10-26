let numero = parseInt(prompt("Ingrese un numero"))
let contador = 0;
let numerosPrimos = []

for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        contador ++
    }

   
}

document.write(numerosPrimos)