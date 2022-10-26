let numero = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro numero"))
let acumulador = 0;


for(let i = numero; i <= numero2; i ++){

    if(i % 2 == 0){
        acumulador += i
    }
   
}

document.write(acumulador)