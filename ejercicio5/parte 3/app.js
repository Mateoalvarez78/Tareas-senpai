
let array = [];
let limite = parseInt(prompt("Ingrese el limite de numeros"));

for(let i = 0; i < limite; i++){
    let azar = Math.floor(Math.random()*100)
    array.push(azar)
}

console.log(array)