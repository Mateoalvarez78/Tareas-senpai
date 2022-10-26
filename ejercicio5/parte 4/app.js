
let array = ["azul","amarillo", "rojo", "verde", "café", "rosa"] 

let color = prompt("Ingrese un color")

array.find((item) => {
    if (item === color){
        alert("El color ya existe")
    }
})

console.log(array)