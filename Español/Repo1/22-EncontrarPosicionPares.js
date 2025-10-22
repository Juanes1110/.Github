/* 
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones 
donde se encuentran números pares.

* Codigo de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

*/
const prompt = require('prompt-sync')()
positionlist = []
function posiciones(list){
    for( i = 0; i <list.length; i++){
        if(list[i]% 2== 0){
            positionlist.push(i)
        }
    }
    return positionlist
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
console.log(posiciones(list))