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




















// ----------------
// ----------------
// ----------------



// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
