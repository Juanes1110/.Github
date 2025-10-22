/* 
Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

*Codigo de prueba 
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
*/
const prompt = require('prompt-sync')()
function sumarArreglo(list){
    contador = 0
    for(i= 0; i<list.length; i++){
        contador += list[i]
    } 
    return contador
}
list = []
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar "))
    if (limite>15){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>15)
for(i = 0; i<limite;i++){
    list[i] = Number(prompt(`Digite el #${i+1} valor: `))
}
console.log(sumarArreglo(list))