let array = [1,2,3,4,5,6,4,8,9,4,5,6,1,2]


const devolverPares = (arreglo) => {

let filtro = arreglo.filter((item)=> {
    return item % 2 == 0
})

return console.log(filtro)
}


devolverPares(array)