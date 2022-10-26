let numero = parseInt(prompt("Ingrese un numero"))

if(numero % 5 == 0 && numero % 11 == 0) {
    document.write("El numero ", numero, " es divisible entre 5 y 11")
}

else {
    document.write("El numero ", numero, " no es divisible entre 5 y 11")
}