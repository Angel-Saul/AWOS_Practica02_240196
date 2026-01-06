//Comentario de una sola línea 

/*
    Comentario
    ...
    multilinea
*/

//Declaración de variables en JavaScript 
//1. Utilizando la palabra reservada VAR

//Utilizaremos el metodo WARN para estilizar las respuestas de las pruebas realizadas a nuestro codigo, y facilitar su revisión.

console.warn("-----Ejercicio 1: Declaración utilizando el prefijo VAR-----");
var miNombre = "Angel";
console.log("El valor almacenado en la variable miNombre es: ", miNombre);


//Modificar el valor de la variable
miNombre = "Saúl";
console.log("El nuevo valor almacenado en la variable miNombre es: ", miNombre);


var misApellidos;
console.log("El valor almacenado en la variable misApellidos es: ", misApellidos); //undefined
//Una variable puede cambiar su valor durante su ejecución en el programa





console.warn("-----Ejercicio 2: Declaración utilizando el prefijo CONST-----");
//2. Utilizando la palabra reservada CONST
//Una constante a diferencia de una variable es que su valor no cambiara durante la ejecución del programa, y al momento 
//de ser declarada esta deberá ser inicializada obligatoriamente
 const miMatricula = "240196";
    console.log("El valor almacenado en la constante miMatricula es: ", miMatricula);



//Intentamos modificar el valor de la constante
//miMatricula = "240197"; 
console.log("El nuevo valor almacenado en la constante miMatricula es: ", miMatricula);




//3. Utilizando la palabra reservada LET
//lET es el prefijo utilizado muy similar a VAR con la diferencia que en su alcance (SCOPE),
//aquellas declaradas con VAR tienen un alcance global en el codigo no importando bloques o 
//secciones, mientras que las variables declaradas ccon LET solo existirian dentro del bloque o función.

var fechaNacimiento = new Date(2006,12,5);
var miEdad =calcularEdad(fechaNacimiento);
console.log("Tu edad es de: ", miEdad, " años.");


//Verificamps si es mayor de edad
if (miEdad >= 18){
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
} 


if (esMayorDeEdad){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


//console.log("El valor de esMenorDeEdad es: ", esMenorDeEdad);
//La variable booleana no puede persisitir por el tipo de declaración con LET, solo fue de alcance local mientras
//el condicional (IF) se encontraba en ejecución.




function calcularEdad(fechaNacimiento) {
    //Para calcular la edad requeremos la fecha del día de hoy
    var fechaHoy = new Date();

    //Dado que los datos de fecha son almacenados en milisegundos por default en 
    //JavaScript, necesitamos una variable que nos permita saber el numero de milisegundos por día 

    let milisegundosPorDia = 24*60*60*1000;

    //ya que tenemos los milisegundos por día tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular
    //los milisegundos que hemos vivido
    let diaVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //Invocamos el modo matematico de la función piso (FLOOR)
    var edad = diaVividos/365.25;
    edad = Math.floor(edad);

    return edad;
}



//Interpolación de datos 

//$ {} `
misApellidos = "Barrios Martínez";
console.log(`Hola, ${miNombre} ${misApellidos}, actualmente tienes ${miEdad} años.`);










//Autor: Angel Saúl Barrios Martínez