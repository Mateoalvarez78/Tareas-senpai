
let array = [0, 9, 7, 12, 5, 8, 3]

const respuesta = []

const arrayOrdenado = array.sort((a,b) => {
    return a - b
})

const resultado = array.reduce((a,b) =>  a + b)

for(let i = 0; i < array.length; i++){

    /*for(let x = 0; x < array.length; x++){
        
        if(array[i] + array[x] == 12 ){
            respuesta.push([array[i], array[x]])
        }
        
    }*/
    
}
console.log(resultado)