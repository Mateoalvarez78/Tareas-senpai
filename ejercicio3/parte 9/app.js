let numero = parseInt(prompt("Ingrese un numero"))
let contador = 0;

for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        contador ++
    }
}

if(contador > 2){
    document.write("El numero ", numero, " no es primo")
}

else{
    document.write("El número es primo")
}