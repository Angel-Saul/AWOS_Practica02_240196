// Estilización de la barra de zona de pruebas en el Devtools en el navegador 
console.log ("%cEjercicio 03: Funciones ", style_console);



// 1. Funciones procedurales, vacias, VOTO, sin valor de retorno

function saludar() {
    console.log("Bienvenid@ al sistema de bienes raices");
}

console.warn("1. Funciones sin valor de retorno, sin parametros");
saludar();

// 2. Funciones procedurales sin valor de retorno, con pero que si recibe parametros es decir datos de entrada 

function saludar_usuario(username, gender)
{
    if(gender=="H")
        console.log(`Bienvenido, ${username} al sistema de bienes raices`);
    else if(gender=="M")
        console.log(`Bienvenida, ${username} al sistema de bienes raices`);
    else 
        console.log(`Bienvenid@, ${username} al sistema de bienes raices`);
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada");
saludar_usuario("Angel", "H");
console.log("---------------------------------------------------------------");
saludar_usuario("Luis", "M");
console.log("---------------------------------------------------------------");
saludar_usuario("Guadalupe", null);


//3. Funciones que retornan un dato, pero que no reciben parametros 
function fechaActual()
{
    const fecha = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    return fecha_formatoMX;
}

console.log("3. Funciones que retornan un dato, pero que no tienen parametros ");
let hoy = fechaActual();
console.log(`Bienvenid@ al Sistema de Bienes Raices, hoy es ${hoy}`);

// Imprime el valor y que tipo de dato es
console.log(fechaActual);
console.log(typeof fechaActual);

// 4. Funciones que retotnan un valor y que reciben parametros de entrada
function login(username, password)
{
    let userValidacion = false;
    if(username==="admin" && password==="12345") {
        userValidacion=true;
        console.log("Bienvenido usuario admin!");
    }
    else if (username!=="admin" && password!=="12345") {
        userValidacion=false;
    console.log("Por favor verifica el usuario y la contraseña");
    }
    return userValidacion;
}

console.warn("4. Funciones que retornan un dato, pero tambien reciben parametros de entrada");
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario admin`}`);


//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario admin`}`);

    
//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 45112432138")
loginStatus = login("admin", "45112432138");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario admin`}`);

    
//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: Angel, password: mipassword")
loginStatus = login("Angel", "mipassword");
console.log(`${loginStatus ?  `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario admin`}`);


//FUNCIONES ANONIMAS, FUNCIONES FLECHA (ARROW FUNCTIONS), FUNCIONES LAMBA 
/* A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas en el código solo 
se ejecutan una sola vez, dando velocidad, indivilidualidad y privacidad a los datos utilizados en el proceso*/

//5. Función anónima sin parametros 
isNewUser = function() {
    const hoy = new Date();
    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funciones Anónimas, sin parametros")

console.log("Test 1 - Fecha del ultimo acceso es igual a la fecha de hoy")
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`)


console.log("------------------------------------------------------------")


lastLogin = new Date("2025/12/31")
console.log("Test 2 - Fecha del ultimo acceso es diferente a la fecha de hoy")
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

