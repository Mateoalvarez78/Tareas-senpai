let personas = [
    {
        nombre : "Mateo",
        telefono : 946541654,
        cant : 0
    },
    {
        nombre : "Micaela",
        telefono : 123456789,
        cant : 0
    },
    {
        nombre : "Lucas",
        telefono : 987654321,
        cant : 0
    },

]

let parrafo = document.getElementById("parrafo")

let telefono1 = document.getElementById('telefono1').addEventListener("click", () => {aumento()})

const aumento = () => {
    document.getElementById('cantidad1').innerHTML = ++personas[0].cant
    parrafo.classList.toggle("rojo")
}



let telefono2 = document.getElementById("telefono2").addEventListener("click", () => {
    document.getElementById('cantidad2').innerHTML = ++personas[1].cant
})
let telefono3 = document.getElementById("telefono3").addEventListener("click", () => {
    document.getElementById('cantidad3').innerHTML = ++personas[2].cant
})



