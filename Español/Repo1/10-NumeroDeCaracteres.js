/*
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
La función debe retornar el número de veces que aparece el caracter en el string.

* Codigo de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
*/

const prompt = require('prompt-sync')()

function numeroDeCaracteres(Frase,Caracter){
    contador = 0
    lista = [...Frase]
    for(i=0; i<lista.length; i++){
        if(Caracter == lista[i]){
            contador += 1
        }
    }
    return contador
}
let Frase = String(prompt("Ingrese un string (cadena de texto) "))
let Caracter = prompt("Ingrese un solo caracter ")

console.log(numeroDeCaracteres(Frase,Caracter))