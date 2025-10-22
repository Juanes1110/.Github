/*
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo 
arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

* Codigo de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
*/
const prompt = require('prompt-sync')()
function empiezanConA(list){
    let startWithA = []
    for(i = 0; i< list.length; i++){
        if(list[i].startsWith("a") || list[i].startsWith("A")){
            startWithA.push(list[i])
        }
    }
    return startWithA
}
list = []
do{ 
    limite = Number(prompt("Ingrese cuantas palabras desea ingresar en el listado "))
    if (limite>10){
        console.log("Digite otro valor mas pequeño")
    }
} while(limite>10)
for(i = 0; i<limite;i++){
    list[i] = String(prompt(`Digite el #${i+1} valor: `))
}
console.log(empiezanConA(list))