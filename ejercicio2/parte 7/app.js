
let string = prompt("Ingrese oración")
let comprobar = string.split("")

if(comprobar[0] == comprobar[0].toLowerCase()){
    document.write("El string comienza con minúscula")
}

else{
    document.write("El string comienza con Mayúscula")
}

