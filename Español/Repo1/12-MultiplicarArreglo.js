/* 
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

* Codigo de Prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
*/
const prompt = require('prompt-sync')()
function multiplicarArreglo(list){
    contador = 1
    for(i= 0; i<list.length; i++){
        contador *= list[i]
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
console.log(multiplicarArreglo(list))
