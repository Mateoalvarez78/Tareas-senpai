let numero = parseInt(prompt("Ingrese un número"))
let numeroRandom = Math.floor(Math.random() * 11)

if(numero === numeroRandom){
    document.write("Buen trabajo")
}

else {
    document.write("no corresponde")
}
console.log(numeroRandom)