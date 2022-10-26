let array1 = [1,2,3];
let array2 = [1,2,4];

let array3 = []

let iguales = [...array1, ...array2]

iguales.sort()

for(let i = 0; i < iguales.length; i++){
    if(iguales[i] === iguales[i + 1]){
        array3.push(iguales[i])
    }
}

console.log(array3)
console.log(iguales)