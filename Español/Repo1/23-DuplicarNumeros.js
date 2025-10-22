/*
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
* Codigo de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
*/
const prompt = require('prompt-sync')()
doublelist = []
function duplicar(list){
    for(i = 0; i< list.length; i++){
        doublelist.push(list[i]*2)
    }
    return doublelist
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
console.log(duplicar(list))