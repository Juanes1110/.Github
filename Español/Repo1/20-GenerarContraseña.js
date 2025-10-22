/*
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.

* Codigo de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""


*/


function password(Password){
    let newPassword = ""
    for(i = 0; i< Password.length; i++){
        change = Password[i]
        if(change=== "a"){
            change = "4"
        } else if(change === "e"){
            change = "3"
        }else if(change === "i"){
            change = "1"
        }else if(change === "o"){
            change = "0"
        }
        newPassword += change
    }
    return newPassword
}



const prompt = require('prompt-sync')()
let Password = String(prompt("Ingrese una contraseña: "))


console.log(password(Password))