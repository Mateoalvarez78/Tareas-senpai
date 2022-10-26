

const reporteDePasajeros = (estaciones) => {

    let reporte = []
    let inicio = 200

    for(let i = 0; i <= estaciones; i++){

        if(i >= 5){
            reporte.push(["En la estación ", i, " hay ", inicio + (i*20) + 20, " pasajeros"])
        }
        else{
            reporte.push(["En la estación ", i, " hay ", inicio + (i*20), " pasajeros"])
        }

    }

    return reporte
}

console.log(reporteDePasajeros(7))