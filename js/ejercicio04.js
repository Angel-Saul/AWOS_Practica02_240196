//Estillización de la barra zona de pruebas en el DevTools en el navegador 
console.log("%cEjercicio 04: Objetos", style_console);

console.warn("1. Propuedades de un Objeto");
//Estos ya no son objetos, son variables independientes
let propertyID = 1;
let propertyName = "Departamento en el Centro de la Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recamaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de la Ciudad de México, ubicado en un tercer piso."
let propertyType = "D"; //H: House D: departament T: Terrain L: Locale W: Warehouse C: Cabain
let propertyIsSaleable = false;
let propertyIsRentable = true;
let propertyPrice = 7500.00
let propertyLat = 19.4283813;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX-S"); 
let propertyIncludeServices = ["Agua", "Luz", "Gas" ];
let propertyImage = null;
let propertyOwnerID = 32412;
let propertyStatus = "Good"

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción: ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat} Longitud: ${propertyLong}
    Servicios Incluidos: ${propertyIncludeServices}
    En renta: ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}
    `)

//2. Declaración de un objeto 
/* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades irán 
entré {} y separación para coma en el orden clave: valor */

property1 = {
    id: 1,
    name: "Departamento en el Centro de la Ciudad de México",
    descripction: "Hermoso departamento de 3 recámaras, 1 baño, 1 cajón de estacionamiento ubicado en el Centro de la Ciudad de México, ubicado en un tercer piso. ",
    type: "D",
    price: "7500",
    isRentable: "true",
    isSaleable: "false",
    includeServices: ["Agua", "Luz", "Gas"],
    lat: 19.4283813,
    long: -99.1020177,
    token: Symbol("D-12558-CDMX-MX-S"),
    image: null,
    ownerID: 32412,
    status: "Good"

}

//Impresión del objeto en formato tabla 
console.table(property1);   


//3. Leyendo las propiedades de un objeto 
/* Un objeto es un conjunto de variables que abstraen una entidad física o conceptual de la que es significativo almacenar 
información para el programa o sistema que estamos desarrollando.

Para declarar a las propiedades individuales basta con poner el nombre del objeto un "." y el 
nombre de la propiedad*/


console.warn("3. Lectura de propiedades de un objeto");
console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.descripction} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includeServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);



//4. Modificación de los valores de las propiedades de un objeto
/*Para modificar los datos de una variable basta con acceder a la propiedad deseada a modicar y assignarle su nuevo valor 
a través del signo = */

property1.price = 82000.00;
property1.isSaleable = true;
property1.includeServices = ["Agua", "Luz", "Gas", "Internet", "Seguridad Privada"];

console.warn("4. Modificación de las propiedades de un objeto");

console.log(`El usuario con id ${property1.ownerID} está rentando un: ${property1.name} 
    el cual descibe cómo: ${property1.descripction} por un precio de: ${property1.price} con los servicios 
    incluidos de: ${property1.includeServices} ${property1.isSaleable?", actualmente está a la venta":
    "Que por el momento no está a la venta" }`);



//Destructuración de objetos (Object Destructuring)
/* Java Script es un lenguaje dinamico que permite que un pbjeto previamente definido puede ser compuesto en pequeñas nuevas 
partes (variables) para que estas puedan ser manipuladas según sea la necesidad*/

user1 = 
{
    userId: 32412,
    name: "Angel Saúl",
    email: "angel@gmail.com",
    createAt: Date("2015/01/30T23:15:52"),
    lastLogin: Date("2026/01/20T08:00:05"),
    userRole: ("Vendedor"),
    totalProperties : 12,
    rating: 9.4
}

user2 = 
{
    userId: 240343,
    name: "Luis Felipe",
    email: "luis@gmail.com",
    createAt: Date("2023/08/20T18:08:58"),
    lastLogin: Date("2024/01/19T23:15:35"),
    usinerRole: ("Comprador"),
    rating: 8.5,
    lastOperation : "Buscando departamento para renta"
}

user3 = 
{
    userId: 240196,
    name: "Pablo Felipe",
    email: "pablo@gmail.com",
    createAt: Date("2024/08/20T16:08:58"),
    lastLogin: Date("2026/01/19T23:15:35"),
    usinerRole: ("Comprador"),
    rating: 9.0,
    lastOperation : "Buscando departamento para renta"
}

user4 = 
{
    userId: 240558,
    name: "Jonhy Felipe",
    email: "jonhy@gmail.com",
    createAt: Date("2024/08/20T19:08:58"),
    lastLogin: Date("2025/01/19T23:15:35"),
    usinerRole: ("Comprador"),
    rating: 8.7,
    lastOperation : "Buscando departamento para renta"
}


const buyerbid = (seller, buyer, property, price_bidded) => {
    const { userId: sellerID, email: sellerEmail } = seller;
    const { userId: buyerID, email: buyerEmail } = buyer;
    const {price,id} = property;
    fecha_oferta = new Date();
    


    console.log(`El usuario: ${buyerID} esta realizadno una oferta al usuario: ${sellerID}
        por la cantidad de: ${price} 
        por la propiedad ${id} 
        con fecha ${fecha_oferta}`);


        


        return {
        buyerID,
        sellerID,
        property: id,
        propertyPrice: price,
        date_bidded: fecha_oferta,
        bid_acurrance: (price_bidded / price * 1000).toFixed(2) + "%"
    };
};

//Test 1: El usuario 2 realiza una oferta de 7500
let bidi1 = buyerbid(user1, user2, property1, 7500);
console.table(`La oferta tiene una exactitud de : ${bidi1.bid_acurrance} `);

//Test 2: El usuario 3 realiza una oferta de 8200
let bidi2 = buyerbid(user1, user3, property1, 8200);
console.table(`La oferta tiene una exactitud de : ${bidi2.bid_acurrance} `);

//Test 3: El usuario 4 realiza una oferta de 10000
let bidi3 = buyerbid(user1, user4, property1, 10000);
console.table(`La oferta tiene una exactitud de : ${bidi3.bid_acurrance} `);