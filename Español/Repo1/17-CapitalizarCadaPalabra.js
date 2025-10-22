/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

* Codigo de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""

!Nota: Aqui se utilizó los mapas 
? estudiar mas 
*/

const prompt = require('prompt-sync')()


function capitalizar(frase){
    if (frase === ""){
        return frase
    }

    const frase2 = frase.split(" ")
    fraseNueva = frase2.map(frase2 => frase2[0].toUpperCase()+ frase2.slice(1)).join(" ")
    return fraseNueva
}

frase = String(prompt("Ingrese una cadena de texto: "))
console.log(capitalizar(frase))

