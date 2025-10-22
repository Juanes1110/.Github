/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los 
números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

* Codigo de Prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
*/
const prompt = require('prompt-sync')()

function sumarRango(num1,num2){
    contador = 0
    if(num1>num2){
        for(i = num2; i<=num1;i++){
            contador += i
        }
        return contador
    }else if(num1 == num2){
        return num1 - num2
    }else{
        for(i = num1; i<=num2; i++){
            contador += i
        }
        return contador
    }
}


let num1 = Number(prompt("Ingrese el primer numero: "))
let num2 = Number(prompt("Ingrese el segundo numero: "))
console.log(sumarRango(num1,num2))
