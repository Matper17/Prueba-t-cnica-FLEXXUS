//Realizar un programa que ingrese los sueldos de 5 operarios en un vector. 
//Realizar la creación y carga del vector en el constructor. 
//Crear un método para imprimir el vector.

const salarios = []; 

for (let i = 1; i <= 5; i++){ 
    const sueldos = parseFloat (prompt(`Ingrese su salario ${i}:  `));
    salarios.push(sueldos); 
}

console.log(`El salario ingresado es: ${salarios}`)

//Para realizar este apartado, se utilizo un array vacío, 
//luego un ciclo for que dentro del mismo se creo un const sueldos = parseFloat para que analice el argumento y lo devuelva como un número. 
//Por último, utilice un console.log para que muestre en consola los datos ingresados.  


