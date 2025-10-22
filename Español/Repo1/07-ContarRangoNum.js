/*
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

*Codigo de Prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
*/

const prompt = require('prompt-sync')()


function contarRango(num1,num2){
    if(num1>num2){
        return num1 - num2 -1
    }if(num1 == num2){
        return num1-num2
    }else{
        return num2 - num1 -1
    }
}
let num1 = Number(prompt("Ingrese el primer numero "))
let num2 = Number(prompt("Ingrese el segundo numero "))

console.log(contarRango(num1,num2))
