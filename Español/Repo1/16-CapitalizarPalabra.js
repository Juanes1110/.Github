/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

* Codigo de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
*/

const prompt = require('prompt-sync')()


function capitalizar(frase){
    if (frase === ""){
        return frase
    }
    fraseNueva = frase[0].toUpperCase() + frase.slice(1)
    return fraseNueva
}

frase = String(prompt("Ingrese una cadena de texto: "))
console.log(capitalizar(frase))

