//Tipos de datos en Java Script

//Personalizacipon de la salidas a Consola 
// const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
// const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;

console.log("%cEjercicio 02: Tipo de datos", style_console);

//1. Undefined, valor por defecto asignado a variables declaradas pero no inicializadas
console.warn("1.- UNDEFINED (No definido)");
let usuarioLogueado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valor actuales de las variables: ");
console.log(`usuarioLogueado: = ${usuarioLogueado}`);
console.log(`rolUsuario: = ${rolUsuario}`); 
console.log(`ultimoAcceso: = ${ultimoAcceso}`);


/* En JavaScript existe ek metodo tyoeof() que nos devuelve el tipo de dato de la variable previamente declarada */
console.log("Tipos de datos de las variables: ");
console.log(`Tipo de dato de la variable usuarioLogueado: = ${typeof(usuarioLogueado)}`);
console.log(`Tipo de dato de la variable rolUsuario: = ${typeof(rolUsuario)}`); 
console.log(`Tipo de dato de la variable ultimoAcceso: = ${typeof(ultimoAcceso)}`);

//Supongamos que un usuario denominado MarcoRamirez se ha logueado exitosamente, el valor de la variable deberá actualizarse a su username
usuarioLogueado = "SaulMua";
//pero no solo cambiará su valor, tambien cambiará su tipo de dato a STRING
console.log(`El valor de la variable usuarioLogueado es : ${usuarioLogueado} y su nuevo tipo de dato es: ${typeof(usuarioLogueado)}`);

//2. Boolean (true/false) - verdadero o falso

var hayUsuariosLogueados = false;
 
/*supongamos que nuestra app tendrá un menú espesífico para usuarios registrados, en el podrán visualizar
sus mensajes o estados de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que 
entran de manera incognita a visualizar sus propiedades */

function validacionUsuariosLogueados() {
    console.log(`El valor de la variable hayUsuariosLogueados es : ${hayUsuariosLogueados} que es de tipo: ${typeof(hayUsuariosLogueados)}`);

    if (hayUsuariosLogueados === true) {
        console.log("Dado que se ha logueado un usuario la app mostrará el menú de usuario.");
    } else if (hayUsuariosLogueados === false) {
        console.log("Dado que no hay usuarios logueados la app no mostrará el menu de usuario.");
    } else {
        console.log("No puedo procesar ese tipo de dato, requiero de un booleano.");
    }
}

//test1: usuario logueado = true

hayUsuariosLogueados = true;
console.log("Test 1");
validacionUsuariosLogueados();

//test2: usuario logueado = false
hayUsuariosLogueados = false;
console.log("Test 2");
validacionUsuariosLogueados();

//test3: usuario logueado = undefined
hayUsuariosLogueados = 52.5;
console.log("Test 3");
validacionUsuariosLogueados();