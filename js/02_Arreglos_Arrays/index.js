// TEMA 33: AREGLOS O ARRAYS

// Veremos otro tipo de dato muy importante en JavaScript

// Lo Arreglos son estructuras de datos que nos permiten almacenar multiples valores en una misma estructura.

// Son muy parecidos a los que nosotros considerariamos una lista
// ----------------




// Vamos a definir una variable que se llama "arreglo" y a esta le asignamos un arreglo
// Para crear un arreglo escribimos corchetes y dentro de los corchetes tendriamos los elementos de ese arreglo

// Por ejemplo:
    // "john" y 24 lo cual representan una cadena de caracteres y un numero.

// Los elementos de un arreglo estan en una secuencia especifica, cada uno tiene su lugar en esa secuencia y la secuencia esta en orden especifico

//  Asi como podiamos acceder a los caracteres de una cadena con sus indices tambien vamos a poder acceder a cada uno de estos elementos con su indice correspondiente.

var miArreglo = ['John', 24];
console.log(miArreglo);

// La ventaja de los arreglos es que podemos agrupar valores bajo una misma estructura
// ----------------




// OTRO EJEMPLO
var estudiantes = ['Nora', 'Dino', 'Arldnold', 'Patricio', 'Arenita'];
console.log(estudiantes);
// ----------------


// OTRO EJEMPLO
var notas = [95, 89, 67, 56, 90, 100];
console.log(notas);


// Entonces podemos entender que los arreglos pueden ser muy poderosos para trabajar con valores relacionados, en este caso tenemos "nombres de estudiantes", "notas", "persona"
// ------------------------------------------------------------------




// TEMA 34: Arreglos Anidados

// Algo muy interesante sobre los arreglos, es que pueden contener cualquier tipo de datos, incluyendo otros arreglos

// Ahora si los elementos dentro del array en lugar de ser enteros o cadenas de caracteres fuesen arreglos. A eso lo llamamos una arreglo "anidado"
var listaDeEstudiantes = [['Patricio', 50], ['Arenita', 100]]

// De esta manera estamos creando elementos individuales del arreglo principal.
// Cada uno de estos arreglos puede ser utilizado de forma individual, pero los estamos guardando en una estructura mas grande que los contiene a todos.

console.log(listaDeEstudiantes);
// ----------------


// OTRO EJEMPLO

// Digamos que quiero hacer una lista de precios tengo un inventario y queremos crear un arreglo sencillo para los tipos de elementos que vende mi tienda
var listaDeProductos = [['Camisa', 5.67, 'SR210'], ['Celular', 250, 'SR398'], ['Zapatos', 36.7, 'SR098']];
// Creamos un arreglo que va a contener una secuencia de arreglos, el arreglo principal va a tener un arreglo por cada elemento, es decir por cada articulo que yo vendo.

// Se hablara depues de como poder tener acceso a esos arreglos anidados.

// Mostramos la lista de productos en la consola
console.log(listaDeProductos);
// ----------------



// OTRO EJEMPLO
// Para mostrar que no solo se puede trabajar con enteros y con cadena de caracteres, podemos crear un arreglo con arreglos anidados que contengan solo numeros decimales.
var datos = [[3.4, 5.6, 3.2], [6.7, 8.1, 4.5], [2.6, 5.3, 3.4]];
console.log(datos);

// Ya entendimos como definir un arreglo con arreglos anidados y para que se usan
// ------------------------------------------------------------------







// TEMA 35: Acceder a los Elementos de un Arreglo

// Una ves que definimos nuestro arreglo en nuestro programa es muy importante saber como acceder a sus elementos, porque para eso estamos creando el arreglo, para poder agrupar los elementos y luego utilizarlos o usarlos en el programa

var miArreglo = [10, 20, 30];

/*

Arreglo: [10, 20, 30]
Indices:   0   1   2

*/
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
// Con esto ya podemos tener acceso a los 3 elementos del arreglo.

// -----------------


// OTRO EJEMPLO:

// ¿Por qué es importante tener acceso a esos elementos? porque podemos usarlos en el programa.

// Por ejemplo si queremos sumarlos.

// Existe otra forma mas eficiente de hacerlo pero esto es un ejemplo de como se puede usar.
var miArreglo = [80, 90, 60];

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
// Estamos tomando cada uno de esos valores en el indice: 0, 1, 2 y los estamos sumando y al resultado lo estamos asignando a la variable suma, luego podemos mostrar ese valor en consola.

console.log(suma);
// Asi es como podemos usar los elementos de una arreglo en nuestro programa simplemente escribimos el nombre de la variable seguido de corchetes y dentro de los corchetes el indice del elemento al cual queremos acceder
// ------------------------------------------------------------------




// TEMA 36: Modificar Elementos de un Arreglo (Array)

// Tambien es importante tener en cuenta la modificacion de los elementos de un arreglo.

// Ahora con este ejemplo digamos que queremos actualizar el valor o cambiarlo de 10 a 40
var miArreglo = [10, 20, 30];
console.log(miArreglo);

// La sintaxis es muy parecida a como "accedemos" al elemento
miArreglo[0] = 40;
console.log(miArreglo);

// NOTA: A diferencia de las cadenas de caracteres los arreglos son mutables, si podemos cambiar un elemento individual del arreglo.
// ----------------


// OTRO EJEMPLO:

// Tambien podemos asignar valores de diferentes tipos
//  Por ejemplo si en el indice 1, quisieramos asignar una cadena de caracteres que diga "Hola".
var miArreglo = [10, 20, 30];

miArreglo[2] = "Soy patricio y botd";
console.log(miArreglo);
// ----------------


// OTRO EJEMPLO:

// Tambien podemos asiganar otros tipos de  datos

// Podemos asignar un arreglo como el valor.
var miArreglo = [10, 20, 30];

miArreglo[1] = [15, 25, 35];
console.log(miArreglo);

// Ya sabemos como acceder a los elementos de un arreglo con su indice correspondiente, recuerda que comenzamos a contar desde 0 luego 1, luego 2, etc... y asi sucesivamente para cada elemento.
// Podemos asignar un valor de cualquier tipo de dato.
// ------------------------------------------------------------------




// TEMA 37: Acceder a Arreglos Multidimensionales

//  Asi como puedes acceder a los elementos de una arreglo elementos como numeros o cadenas tambien podemos acceder a elementos que sean arreglos o arreglos anidados.

// Los arreglos que contienen arreglos anidados se denominan arreglos multidimensionales.

var miArreglo =[[1,2,3], [4,5,6], [7,8,9]];

// ¿Como podemos ocupar los indices para poder tener acceso a esos numeros que tenemos aqui?

/*

Areglo:              [[1,2,3], [4,5,6], [7,8,9]] 
Indices:                 0        1        2
Indices Internos:      0 1 2    0 1 2    0 1 2

*/


console.log(miArreglo[2][1]);
// El arreglo esta en el inidice 2, pero, luego de que accedemos a ese arreglo con el indice 2, tenemos que especificar el indice del elemento que queremos acceder que queremos obtener.
// En este caso obtenemos el elemento 8 el segundo elemento en el arreglo

// Y como podemos darnos cuenta tenemos una secuencia de dos indices, asi es como podemos obtener un elementos de un arreglo anidado.

// Primero especificamos el indice del arreglo y luego el indice del elemento, y el resultado ya no sera un arreglo si no el elemento 8.
// ----------------



// OTRO EJEMPLO

// Si queremos accder al elemento 2, y notamos que esta en arreglo que esta en el indice 0 y luego para acceder al numero especifico, es decir, al elemento 2 (numero) cambiamos el segundo indice por el indice 1 para poder tener acceso a ese numero en especifico que es e numero 2 el que queremos mostrar
var miArreglo =[[1,2,3], [4,5,6], [7,8,9]];
console.log(miArreglo[0][1]);

// Entonces va primero el indice del arreglo y luego el indice del elemento.
// ----------------




// OTRO EJEMPLO:

var miArreglo =[[1,2,3], [4,5,6], [7,8,9]];

console.log(miArreglo[0][0]);
console.log(miArreglo[0][1]);
console.log(miArreglo[0][2]);
// ------------------------------------------------------------------









// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
