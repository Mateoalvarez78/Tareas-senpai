let arrayPersonas = [
    {
        nombre : "Mateo",
        edad : 26
    },
    {
        nombre : "Lucia",
        edad: 31
    },
    {
        nombre : "Micaela",
        edad : 14
    },
    {
        nombre : "Juan Manuel",
        edad : 19
    }
]

const promedioEdad = (objeto) => {
    
    let sumatoria = 0;

    for(let i = 0; i < arrayPersonas.length; i++){
        sumatoria += arrayPersonas[i].edad
    }

    return sumatoria / arrayPersonas.length

}

console.log(promedioEdad(arrayPersonas))