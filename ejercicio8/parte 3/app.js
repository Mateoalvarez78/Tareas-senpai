let personas = {
    name : prompt("ingrese su nombre"),
    edad : parseInt(prompt("Ingrese su edad"))
};

const mayorEdad = (persona) => {

    if(persona.edad >= 18){
        console.log("Eres mayor de edad")
    }
    else{
        console.log("Eres menor de edad")
    }

}

mayorEdad(personas)