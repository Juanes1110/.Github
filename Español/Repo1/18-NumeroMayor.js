/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.

* Codigo de prueba 
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
*/

const prompt = require('prompt-sync')()

function max(list){
    console.log(`[${list}]`)
    max = list[0]
    for(i = 0; i< list.length; i++){
        if(max< list[i]){
            max = list[i]
        }
    }
    return `el numero mayor es: ${max}`

}

list = []
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    list[i] = Number(prompt(`Digite el #${i+1} valor: `))
}
console.log(max(list))