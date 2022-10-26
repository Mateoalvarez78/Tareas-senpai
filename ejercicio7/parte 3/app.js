
let numeros = prompt("Ingrese numeros");
let numeros2 = prompt("Ingrese segundos números");

let array1 = numeros.split(",").map((item) => {
    return Number(item)
})
let array2 = numeros2.split(",").map((item) => { 
    return Number(item)
})

let array3 = []

if (array1.length === array2.length){
    for(let i = 0; i < array1.length; i++){
        array3.push(array1[i] + array2[i])
    }
}

console.log(array1, array2)
console.log("Array 3:: ",array3)