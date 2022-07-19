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

// Si queremos acceder al elemento 2, y notamos que esta en el arreglo que esta en el indice 0 y luego para acceder al numero especifico, es decir, al elemento 2 (numero) cambiamos el segundo indice por el indice 1 para poder tener acceso a ese numero en especifico que es e numero 2 el que queremos mostrar
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




// TEMA 38: Metodos utiles para trabajar con arreglos -> .push()

// Los arreglos son estructuras de datos muy poderosas, no solamente podemos acceder y modificar los elementos de un arreglo, tambien podemos agregar elementos al arreglo

// Entonces aprenderemos como agregar esos elementos al arreglo.

// Digamos que tenemos una lista de cadena de caracteres que van a representar las estaciones del año, estan ordenadas en orden alfabetico ¿y cual es la que nos falta? "Verano".
var estaciones = ['Invierno', 'Otoño', 'Primavera'];

// ¿Como podemos agregar esa cadena de caracteres al arreglo?, con algo llamado un metodo

// Un metodo es como una funcion que podemos llamar para poder hacer algo con un elemento de nuestro codigo.

// Los arreglos tienen metodos especificos que podemos llamar para trabajar con ellos.

// El metodo ".push()" es muy util porque nos permite añadir un elemento al FINAL del arreglo, y eso es lo que necesitamos exactamente en este caso, porque queremos que este ordenado en orden alfabetico.

estaciones.push('Verano'); // Añade un elemento al final del arreglo
console.log(estaciones);
// ------------------------------------------------------------------




// TEMA 39: Metodos utiles para trabajar con arreglos -> .pop()

// Tambien tenemos un Metodo para mover el ultimo elemento de un arreglo.

// ejemplo:
var estaciones;

estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

estaciones.pop();
console.log(estaciones);
// ----------------



// OTRO EJEMPLO:

// Tambien ademas de remover ese elemento lo retorna, asi que podemos asignarlo a una variable.

// Digamos que tenemos una variable llamada "estacion".
 var estacion;
 estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

//  Y vamos asignarle ese valor que estamos removiendo que es "verano" a la variable estacion, esa es otra ventaja que nos da el metodo ".pop()"
estacion = estaciones.pop(); // este metodo no toma ningun argumento

console.log(estaciones);
console.log(estacion);

// Podemos eliminar el elemento y asignarlo a una variable para trabajar con ese elemento de forma individual

// Ahora entendemos como poder trabajar con el metodo .pop()
// ------------------------------------------------------------------




// TEMA 40: Metodos utiles para trabajar con arreglos -> .shift()

// Tenemos otro metodo de arreglos que es muy util que nos permite remover el primer elemento del arreglo, en vez de removerlo del final del arreglo, es decir, el ultimo elemento, ahora vamos a remover el primer elemento

var estaciones = ['Invierno', 'Otoño', 'Primavera', 'Verano'];

// ¿Como podemos eliminar la cadena que dice "Invierno"?

// Entonces como podemos eliminar la primera cadena del arreglo "Invierno", el primer elemento.

// El metodo ".shift()" nos permite remover el primer elemento del arreglo, no tenemos que especificar ningun valor.
// pero los parentesis si son muy muy importante, ya que eso le dice a JavaScript, "Oye quiero que ejecutes esta accion".
estaciones.shift()

// y luego de ejecutar esa accion podemos ver el valor del arreglo
console.log(estaciones);

// Con esto podemos ver que "Invierno" fue removido exitosamente del nuestro array, luego de llamar a nuestra funcion .shift()

// Pero tambien podemos agregar un elemento al principio del arreglo... eso lo veremos en el siguiente tema.
// ------------------------------------------------------------------




// TEMA 41: Metodos utiles para trabajar con arreglos -> .unshift()

// Ahora veamos como podemos agregar un elemento al principio de un arreglo

// por ejemplo:
var estaciones = ['Invierno', 'Otoño', 'Primavera'];
console.log(estaciones);

// digamos que queremos agregar "verano" al principio del arreglo.
// que apresca antes de "Invierno" y lo hacemos llamando al metodo ".unshift()"
estaciones.unshift('Verano'); // decirle a JavaScript que elemento agregar al principio del arreglo

console.log(estaciones);

// Perfecto! ahora conocemos los 4 metodos principales:
    // .pus()
    // .pop()
    // .shift()
    // .unshift()
// Para trabajar con el principio y el final de un arreglo
// ------------------------------------------------------------------





// // TEMA 42: Lista de compras

// PROYECTO 2:

// En este proyecto nos centraremos en los arreglos anidados
// Vamos a escribir un arreglo multidimensional que representa nuestra lista de compras.

// Digamos que queremos ir al supermercado y queremos representar nuestra lista de compras en Javascript 

// Lo primero que hacemos es definir el arreglo principal y luego empezamos a escribir los arreglos anidados

// Creacion de arreglo
var miListaDeCompras = [['Cereal', 3], ['Leche', 2], ['Galletas', 4], ['Pan', 5], ['Refresco', 7], ['Pollo', 7]];
// Esto representa nuestra lista de compras en Javascript

// la forma en que normalmente se conoce - solucion de Cereal
console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0]);

// OTRA forma de solucionarlo con Cereal
console.log(`Voy a comprar ${miListaDeCompras[0][1]} unidades de ${miListaDeCompras[0][0]}.`);

// Leche
console.log(`Voy a comprar ${miListaDeCompras[1][1]} unidades de ${miListaDeCompras[1][0]}.`);

// Galletas
console.log(`Voy a comprar ${miListaDeCompras[2][1]} unidades de ${miListaDeCompras[2][0]}.`);

// Pan
console.log(`Voy a comprar ${miListaDeCompras[3][1]} unidades de ${miListaDeCompras[3][0]}.`);

// Refresco
console.log(`Voy a comprar ${miListaDeCompras[4][1]} unidades de ${miListaDeCompras[4][0]}.`);

// Pollo
console.log(`Voy a comprar ${miListaDeCompras[5][1]} unidades de ${miListaDeCompras[5][0]}.`);














// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
