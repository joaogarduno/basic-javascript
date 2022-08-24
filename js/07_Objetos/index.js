// TEMA 78: Crear Objetos

// Los objetos nos permiten guardar una secuencia o un conjunto de propiedades que estan relacionadas con sus correspondientes valores.

// Por ejemplo, si nosotros queremos describir un perro especifico, una mascota especifica, digamos que queremos representar en nuestro programa las propiedades de nuestro perro, ese perro tiene varias propiedades.
// Esta combinacion de propiedades, como "nombre", "edad", "peso", "raza" y de valores que estan relacionados a esas propiedades, lo denominamos un objeto, que podemos usar en Javascript en nuestro programa
// Es como una forma de agruparlas todas bajo una misma estructura de datos, que, podemos usar y acceder a traves de esta variable
var miPerro = {
    "nombre": "Peluso",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};
// Podemos usar numeros como propiedades e incluso tambien podemos omitir tambien las comillas, si los nombres de las propiedades tienen una sola palabra, no teniendo ningun espacio.
// ----------------




// Otro ejemplo

// Tambien podemos utilizar numeros como propiedades
var miObjeto = {
    5: "cinco"
};
// Si el objeto tiene una propiedad que no es una cadena JavaScript las combierte automaticamente en cadenas de texto, asi que si no las rodeamos en comillas de igualforma van a ser comillas en la representacion interna del programa
// ------------------------------------------------------------------





// TEMA 79: Acceder a Propiedades: Notación de Punto

// Podemos acceder a las propiedades de un objeto usando algo que llamamos notacion de punto.

// Ejemplo
var miPerro = {
    "nombre": "Daysie",
    "edad": 5,
    "peso": 6,
    "raza": "Husky"
};
// Podemos acceder a las propiedades de ese objeto porque si no para que serian de utulidad en JavaScript, los objetos son muy utiles porque podemos acceder a sus propiedades

// Por ejemplo, si quisieramos trabajar con el "nombre" de este objeto que es "Daysie", podemos acceder a ese valor en nuestro programa usando la notacion de "punto", ¿Como accederiamos a esta propiedad? escribiendo el nombre de la variable que contiene al objeto "miPerro.nombre" despues del punto iria la propiedad a la que estaremos teniendo acceso
console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.raza);

// Asi es como accedemos a las propiedades de un objeto, recuerda con el nombre de la variable segido de un "punto" y luego el nombre de la "propiedad"
// ------------------------------------------------------------------





// TEMA 80: Acceder a Propiedades: Notación de Corchetes

// Notacion alternativa para acceder a las "propiedades" de un objeto.

// Primero definimos nuestro objeto y vamos asignarlo a la variable "miCuaderno", este objeto tendra las propiedades "color", "categoria", "numero de paginas", "numero de hojas"
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};
// Este es nuestro objeto, y como podemos notar en el nombre de las ultimas 2 "propiedades", "numero de paginas" y "numero de hojas" tenemos espacios, pero como se estan rodeando entre comillas podemos escribirlas, solo podemos omitir las comillas cuando el nombre tenga una sola palabra, si tiene mas de una palabra y hay espacio en ese nombre tenemos que rodearla entre comillas es obligatorio.
console.log(miCuaderno.color);

// Ahora vamos a utilizar la notación de corchetes, es una notacion que es equivalente, ya que normalmente utilizamos la notacion de punto, pero la "notación de corchetes" nos permite acceder a este tipo de propiedades que tienen "espacios", esas propiedades que tienen "espacios en su nombre", en ese caso es obligatorio, pero tambien podemos utilizarlas para acceder a cualquier propiedad digamos "color"
console.log(miCuaderno["color"]);
// ----------------




// OTRO EJEMPLO:

// Cuando utilizamos la notacion de corchetes, tenemos que escribir un par de corchetes y dentro de los corchetes el nombre de la propiedad rodeado por comillas, podemos acceder a cualquier propiedad digamos "numero de paginas"
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};

console.log(miCuaderno["numero de paginas"]);
// Y vemos en consola el valor de "200"
// ----------------




// OTRO EJEMPLO:

// Con notacion de "punto", esto daria un error, digamos que tratamos de acceder a esta propiedad con la notación de punto y veremos un error, ya que despues del primer espacio no se detecta como un solo nombre, normalmente lo que hacemos en ese caso es unir las palabras comenzando con mayusculas, como los nombres de las variables, en ese caso si podriamos usar "notación de punto" o "notación de corchetes" que es equivalente
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numeroDePaginas": 200,
    "numeroDeHojas": 100
};

console.log(miCuaderno.numeroDeHojas);

// Ahora como la "notacion de punto" es mas concisa y mas facil de leer normalmente utilizamos "notacion de punto", pero la "notacion de corchetes es muy util" tambien cuando necesitamos usar el valor de una variable
// ------------------------------------------------------------------








// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------