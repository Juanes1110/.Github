/*
Escribir una función llamada contrasenaValida que reciba un string y retorne true
si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

* código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false
*/
const prompt = require('prompt-sync')()
contrasenaCorrecta1 = "2Fj(jjbFsuj"
contrasenaCorrecta2 = "eoZiugBf&g9"

contrasena = prompt("Ingrese una contraseña ")

console.log(contrasena == contrasenaCorrecta1 || contrasena == contrasenaCorrecta2)