/* 
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
*Codigo de prueba 
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
*/
const prompt = require('prompt-sync')()
function transcribir(adn){
    ADN = adn.toUpperCase()
    list = [...ADN]
    newList = []
    for(i = 0; i<list.length; i++){
        if(list[i] == "G"){
            newList.push("C")
        }else if(list[i] == "C"){
            newList.push("G")
        }else if(list[i] == "T"){
            newList.push("A")
        }else if(list[i] == "A"){
            newList.push("U")
        }
    }
    newAdn = newList.join("")
    return newAdn
}

adn = String(prompt("Ingrese una cadena de ADN "))
console.log(transcribir(adn))

