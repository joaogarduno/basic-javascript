// TEMA 1: Comentarios

// los comentarios se ignoran

// Comentario de una sola linea

/* Comentario de 
Varias lineas */
// ------------------------------------------------------


// TEMA 2: Tipo de datos

// En JavaScript se trabajan con valores, y cada uno de estos valore tienen un tipo especifico de dato cada uno de ellos dependiendo de su proposito dentro del codigo.

// Incluyendo:
    // undefined -> no exite valor asignado
    // null --> Valor nulo, es decir no existe
    // boolean --> Verdadero y falso
    // string --> cadena de caracteres.
    // symbol -->
    // number --> representa un numero en nuestro codigo
    // object --> respresenta un objeto

// Objeto: es la estructura que nos va a permitir relacionar:
    // Propiedades
    // Funciones
// Bajo una misma estructura que llamamos objeto
// ------------------------------------------------------


// TEMA 3: Variables

// Una variable es como una caja donde podemos guardar un valor

// ¿Qué hace una variable? ¿Cual es su funcion?
// Una variale lo que hace es crear un espacio en la memoria del dispositivo para que guardemos un valor especifico en ese lugar de memoria

// ¿Como crear una variable en JavaScript?
var miVariable = 'Estamos aprendiendo JavaScript';

// Podemos acceder a la variable y usar su valor en el programa.

// Para mostrarla vamos a ocupar la consola para mostrar el valor:
console.log(miVariable);

// Podemos cambiar el valor de la variable
miVariable = 16;
console.log(miVariable);
// Asi podemos asignar cualquier valor que queremos en la variable
// Cualquier otro tipo de valor lo podemos trabajar con las variables

// Nombre descriptivo a la variable, es lo mas recomendable a la hora de nombrar las variables
var miNombre = 'Joao';

// 3 alternativas para poder llamar a una variable con sus palabras reservadas
    // const
    // let
    // var
// ------------------------------------------------------


// TEMA 4: Operadores de Asignacion

// ¿Como podemos asignar una varlor a una varible?

// Sin asignar ningun valor
var a;
// Estamos creando una variable llamada "a" con la palabra reservada "var"

// Estamos asignando un valor a una variable
var b = 2
// La estamos creando y a la misma vez estamos asignado un valor

console.log(a); // Undefined
console.log(b); // Tiene un valor y es "2"

// undefined
    // "undefined" es un tipo de dato
    // Es el valor que se asigna por defecto a una variable cuando no tiene asigando un valor, solo la estamos creando.
// Entonces las variables tienen un valor que se asigna por defecto que se llama "undefined"
// Esto nos dice que la variable no tiene todavia ningun valor asignado.

// Entonces en este momento como le asignamos un valor a "a".
 a = 20;
 console.log(a);
// ------------------------------------------------------


// TEMA 5: Asignar el Valor de una Variable a Otra Variable

// Definamos una variable llamada "a"
var a = 5;
var b = a;
// en la variable "b" la definimos con el valor de la variable "a", entonces esa variable tenia el valor de 5, como podemos trabajar con esa variable y usarla en nuestro programa tambien podemos asignarla a otra variable.

// en este caso vamos asignar "a" a la variable "b"
console.log(a);
console.log(b);

// ----------------
// Otra opcion alternativa de poder asignar el valor de una variable a otra
var a = 5;
var b;

// En lugar de asignarlo en la misma linea, puede ser asignada en otra linea distinta
b = a;
console.log(a);
console.log(b);
// ------------------------------------------------------

















// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------