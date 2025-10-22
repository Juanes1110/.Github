/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30

*Codigo de prueba 

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
*/

function bmi(peso,altura){
    BMI = peso / (altura**2)

    if(BMI<18.5){
        return "Bajo de Peso"
    }else if(18.5 <=BMI && BMI<=24.9){
        return "Normal"
    }else if(25<=BMI && BMI<=29.9){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
}
const prompt = require('prompt-sync')()
peso = parseInt(prompt("Ingrese su peso en kilos (entero) "))
altura = Number(prompt("Ingrese su altura en metros "))
console.log(bmi(peso,altura))