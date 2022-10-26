let arr = [[1,2,3],[4,5,6],[7,8,9]];
const concatenarArreglo = (arreglo) => {
    let array = []
    
    for(let i = 0; i < arreglo.length; i++){
        array = array.concat(arreglo[i])
    }
    return array
}

console.log(concatenarArreglo(arr))