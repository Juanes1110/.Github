/*
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) 
y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.


* Codigo de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
*/
const prompt = require('prompt-sync')()

function numerosAPalabras(list){
    const palabras = {1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho",
        9: "nueve", 0: "cero"

    }
    for( i = 0; i<list.length ; i++){
        list[i] = palabras[list[i]]
    }
    return list
}
list = []
let limite = 0
do{ 
    limite = Number(prompt("Ingrese cuantos numeros desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    do{ 
    list[i] = Number(prompt(`Digite el #${i+1} valor (entre el 0 y el 9): `))
    if (list[i]>10){
        console.log("Digite un valor menor que 10")
    }else if(list[i]<0){
        console.log("Digite un valor mayor o igual que 0")
    }
} while(list[i]>10 || list[i]<0)
}
console.log(numerosAPalabras(list))