/*
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

*Codigo de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
*/
const prompt = require('prompt-sync')()
function numeroDeAes(frase){
    contadorAes = 0
    lista = [... frase]
    for(i = 0; i<lista.length; i++){
        if(lista[i] == "a"){
            contadorAes +=1
        }
    }
    return contadorAes
}
let frase = String(prompt("Ingrese una frase "))
console.log(numeroDeAes(frase))