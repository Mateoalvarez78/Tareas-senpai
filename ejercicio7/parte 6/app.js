let array = [2,75,36,12,-36,15,-11,-300,69,41,22,1,1,23,63,3,3,478,44]

const ordenarArray = (arreglo) => {

    if(arreglo.length == 0){
        return []
    }

    let leftArr = [];
    let rightArr = [];
    let mediumIndex = Math.floor(arreglo.length / 2);
    let pivot = arreglo[mediumIndex]

    for(let i = 0; i < arreglo.length; i++){
        if( i != mediumIndex){
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

console.log(array.length)

console.log(ordenarArray(array))