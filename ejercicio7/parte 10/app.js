
let array = [2, 13, 15, -15, 2, 23, 55, -11, -950, 90, 32, 0]

const ordenarArray = (arreglo) => {

    if ( arreglo.length == 0){
        return []
    }

    let leftArr = [];
    let rightArr = [];
    let indexMid = Math.floor(arreglo.length / 2);
    let pivot = arreglo[indexMid]

    for(let i = 0; i < arreglo.length; i++){
        if(i != indexMid){
            if(arreglo[i] < pivot){
                leftArr.push(arreglo[i])
            }
            else{
                rightArr.push(arreglo[i])
            }
        }
    }

    leftArr = ordenarArray(leftArr);
    rightArr = ordenarArray(rightArr);

    return leftArr.concat(pivot).concat(rightArr)

}

console.log(ordenarArray(array))