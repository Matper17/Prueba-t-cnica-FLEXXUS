//JavaScript ES6: Dados los siguientes array, 
//imprimir por consola los elementos del array “y” que no se encuentran en el array “x”, 
//utilizando para tal fin una única línea de código. 

const x = ["n", "bro", "c", "|"]; 
const y = ["d", "n", "l", "bro", "g"];

console.log(y.filter(item => !x.includes(item))); 

//Para resolver este apartado se utilizo una función de orden superior filter() 
//La misma compara por parámetros y retorna un nuevo array, que, si no hay coincidencias retorna un array vacío. 