//Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
//En el constructor realizar el ingreso de datos. 
//Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18). 

class Alumno {
    constructor (){
        this.name = prompt("Ingrese su nombre: ");
        this.age = parseInt(prompt("Ingrese su edad: "));
    }

    datosPersonales(){
        console.log(`Su nombre es ${this.name} y su edad ${this.age} años`)
    }
    esMayorDeEdad(){
        if(this.age >=18){
            console.log(`Usted tiene ${this.age} y puede ingresar`)
        }else{
            console.log(`Usted tiene ${this.age} y no puede ingresar`)
        }
    }
}

const alumno1 = new Alumno ("Jorgelina", 27);
alumno1.datosPersonales() //Jorgelina, 27 años
alumno1.esMayorDeEdad() //Jorgelina es mayor de edad
const alumno2 = new Alumno ("Matias", 16);
alumno2.datosPersonales() //Matias, 16 años
alumno2.esMayorDeEdad() //Matias es menor de edad


//Se utilizo una class Alumno, para crear un constructor donde se debe ingresar algunos datos (Nombre y edad),
//Luego se definen dos métodos (datosPersonales y esMayorDeEdad), donde se solicitan los datos del constructor
//y mediante el condicional if/else, pasándole la condición si es mayor o igual a 18, 
//en la consoloa nos debería mostrar si tiene acceso o no. 
