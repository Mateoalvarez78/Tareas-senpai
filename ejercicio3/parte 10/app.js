let numero = parseInt(prompt("Ingrese un numero"))
let divisores = []

for(let i = 0; i < numero ; i++){
    if(numero % i == 0){
        divisores.push(i)
    }

}
 let sumaDeDivisores = divisores.reduce((a,b) => {
    return a + b
 })

 if(numero === sumaDeDivisores){
    document.write("Es número perfecto!")
 }

 else{
    document.write("No es número perfecto")
 }

 console.log(sumaDeDivisores)
 console.log(numero)

 alert(`hola ${numero}`)