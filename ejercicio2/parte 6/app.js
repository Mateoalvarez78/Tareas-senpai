let primerAngulo = parseInt(prompt("Ingrese el primer angulo"))
let segundoAngulo = parseInt(prompt("Ingrese el segundo angulo"))
let tercerAngulo = parseInt(prompt("Ingrese el tercer angulo"))

let sumaDeAngulos = primerAngulo + segundoAngulo + tercerAngulo

if(sumaDeAngulos !== 180 ) {
    document.write("El triángulo no es valido")
}

else {
    document.write("El triángulo es valido")
}

