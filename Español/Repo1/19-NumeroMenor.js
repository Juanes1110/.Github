/*
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript.

*Codigo de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

*/

const prompt = require('prompt-sync')()

function min(list){
    console.log(`[${list}]`)
    let min = list[0]
    for(i = 0; i< list.length; i++){
        if(min > list[i]){
            min = list[i]
        }
    }
    return `el numero menor es: ${min}`

}

let list = []
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    list[i] = Number(prompt(`Digite el #${i+1} valor: `))
}
console.log(min(list))