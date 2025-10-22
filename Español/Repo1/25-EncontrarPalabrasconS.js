/*
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan
con "s" (mayúscula o minúscula).

* Codigo de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
*/
const prompt = require('prompt-sync')()
function terminanConS(list){
    let endsWithS = []
    for(i = 0; i< list.length; i++){
        if(list[i].endsWith("s")||list[i].endsWith("S")){
            endsWithS.push(list[i])
        }
    }
    return endsWithS
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
console.log(terminanConS(list))