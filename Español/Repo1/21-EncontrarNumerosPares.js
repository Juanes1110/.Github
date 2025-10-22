/*
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

* Codigo de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
*/


const prompt = require('prompt-sync')()
let evenlist = []
function pares(list){
    for(i=0; i< list.length; i++){
        if(list[i] % 2 == 0){
            evenlist.push(list[i])
        }
    }
    return evenlist
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
console.log(pares(list))