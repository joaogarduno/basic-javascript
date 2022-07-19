// TEMA 43: Funciones

// Para estructurar mejor nuestros programas vamos a ver un concepto una herramienta que podemos usar en nuestro codigo que es muy util y se llaman "funciones"

// Con las funciones podemos escribir codigo que podemos reutilizar en nuestro programa.

// ¿Como definimos una funcion?
function nombreDeNuestraFuncion(){
    console.log("Hola, esta es una funcion!!");
}
// Esto es una definicion de una funcion.

// ¿Que diferecia va hacer esto en nuestro programa?
// Lo que vamos a poder hacer es que, solamente con este nombre de "nombreDeNuestraFuncion" vamos a poder ejecutar la linea de codigo que esta dentro que dice asi "console.log("Hola, esta es una funcion!!");" sin tener que escribirla y queremos realizar esa accion y podemos usarla cuantas veces queramos.

// ejecutamos la funcion anterior
nombreDeNuestraFuncion();
// Cuando ejecutamos una funcion decimos que estamos llamando a la funcion.

// Esto nos va a permitir ahorrar muchas repeticion de codigo, el cual es un principio muy importante en la programacion

// Recuerda que siempre tratamos de no repetir codigo en nuestro programa, lo menos posible.
// ------------------------------------------------------------------




// TEMA 44: Parámetros y Argumentos

// Las funciones son muy utiles porque nos permiten escribir codigo reutilizable

// En la parte anterior vimos como podemos definir una funcion sencilla.

// Agregaremos un poco mas de funcionalidad a nuestra funcion

// Vamos a escribir una funcion con 2 lineas y tambien vamos a gregarle la capacidad de recibir valores, de tomar valores cuando la llamamos.

// ¿Que es lo que vamos a sumar? ¿Que operadores vamos a utilizar y que valores vamos a tener? y para eso dentro del parentesis de la funcion vamos a escribir 2 nombres los cuales, todo lo que se escriba dentro de ese parentesis se le conoce como "parámetros"
// Son cualquier nombre que tu le quieras asignar a un valor que va a recibir la funcion o que se va a tomar cuando llamemos a la funcion
function sumar(a, b){
    var suma = a + b; // Vamos a tomar esos 2 valores de a y b y que en este momento no existen solo hacemos una "referencia", ademas de que, cuando se reciban esos valore los vamos a sumar, vamos asignar ese resultado a una variable llamada "suma"

    console.log(`El resultado de ${a} y ${b} es: ${suma}`);
}
sumar(10, 20); // aqui van los "argumentos"

// Para poder demostrar que las funciones ayudan hacer codigo mas conciso y mas facil de leer y que evita repeticion, podemos llamar a esta funcion varias veces...
sumar(4, 9);
sumar(40, 10);
sumar(12, 5);

// Entonces los argumentos son los valores que asignamos a los parametros, esos 2 conceptos trabajan juntos para permitir que las funciones sean la herramienta poderosisima que son en la programacion.
// ----------------



// OTRO EJEMPLO:

// Una variacion que podemos tener a la hora de llamar a una funcion

// En lugar de escribir los valores directamente justo en donde se colocan los argumentos, tambien podemos asignarlos a variables y pasar las "variables como argumentos"
let x = 10;
let y = 5;

sumar(x, y);
// Lo que nos va a permitir esto, es que, podemos llamar a la funcion con el valor actual de esa variable, es decir... estamos diciendo que el valor de X se va asignar a "a" y el valor de Y se va asignar a "b" (deacuerdo a este ejemplo) y podemos ver que el resultado es el mismo

// Entonces esto quiere decir que podemos trabajar con las variables en nuestras funciones
// ----------------



// OTRO EJEMPLO:

// Y no solo podemos pasar numeros

// Otro ejemplo con cadenas de caracteres
function concatenarTresCadenas(cadena1, cadena2, cadena3, cadena4){
    // La funcion va a concatenar estas cadenas y va a mostrar la cadena final, pero no solo las va a concatenar con el operador de suma, si no que agregara un espacio entre las cadenas, y esa es la ventaja que nos va a traer esta funcion

    // Podemos concatenar las cadenas.
    console.log(`${cadena1} ${cadena2} ${cadena3} ${cadena4}`)

    // Luego cuando llamemos a la funcion concatenar 4 cadenas, podemos pasar un valor para cada una de las cadenas, es decir, debemos pasar un valor, si no tendremos error
}

concatenarTresCadenas('Esto es', 'una prueba', 'de una cadena', 'de caracteres');

// Hay muchos detalles que aprender de las funciones, pero una vez que ya estes comodo con este concepto y se domine mas con la practica, notaremos que las funciones son herramientas importantisimas
// ------------------------------------------------------------------




// TEMA 45: Ámbito global y variables globales

// Ahora hablaremos de un aspecto muy importante de las variables en Javascript.

// No todas las variables pueden usarse en todas las dintintas partes del programa, tenemos 2 tipos principales de variables:
    // Variables -> Globales
    // Variables -> Locales
// Vamos a ver como funciona cada una

    
    // Variable Global
// Una variable con el ambito global es una varible que se puede usar en cualquier lugar del programa porque esta definida en el programa principal

// ejemplo
var miVariableGlobal = 5;
// Esta variable es global porque la estamos definiendo en el programa principal y no dentro de una funcion, asi que si necesitamos acceder a su valor, es decir usarla en el programa, podemos hacerlo.

console.log(miVariableGlobal);

// Y tambien podemos acceder a su valor dentro de una funcion
function miFuncion(){
    // digamos que la necesitamos  dentro de una funcion
    console.log(miVariableGlobal);
}

// Vamos a mostrar su valor dentro de la funcion para comprobarlo que si existe y si esta definida dentro de la funcion...
miFuncion();

// Y tambien va estar definida luego de la funcion, basicamente en cualquier lugar del programa
console.log(miVariableGlobal)

// entonces con todo este codigo estamos mostrando 3 veces el valor de esta variable dentro y fuera de la funcion.

// Ese es el principio basico de una variable global.

// Entonces.. una variable global, es una variable que se puede acceder y usar y modificar en cualquier lugar del programa

// Esto contasta con el concepto de variable Local... que veremos acontinuacion....
// ------------------------------------------------------------------




// TEMA 46: Ámbito Local y Variables Locales

// Ahora entenderemos como funcionan las variables locales

// Las variables Locales, como su numbre lo indica son "locales" para una funcion, son variables que definimos dentro de una funcion y que solo se pueden utilizar dentro de esa funcion.

// Ejemplo

// Si definimos una funcion y dentro de esa funcion declaramos una varibale usando "var", mi variable local con un valor de 4
function miFuncion(){
    var miVariableLocal = 4;

    // Vamos a mostrar el valor de esa variable dentro de la funcion
    console.log(miVariableLocal);
}

// Y ademas vamos a llamar a la funcion para probar que la variable este definida
miFuncion();
// Y vemos que dentro de la funcion esa variable si esta definida.
// ----------------



// OTRO EJEMPLO

// Pero luego digamos que queremos acceder a esa variable "local", fuera de la funcion, vamos a intentar acceder a esa variable
// ¿Qué es lo que puede ocurrir?
function miFuncion(){
    var miVariableLocal = 4;

    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableLocal);
// nos daremos cuenta que nos muestra un error, ¿Por qué? porque esa variable no esta definida, es decir, cuando ejecutamos este ultimo "console.log()" no nos muestra un resultado y nos arroja un error y nos dice que esa variable no esta definida.

// ¿Por qué? Porque las variables "locales" solo estan definidas dentro de la funcion donde fueron declaradas
// Ese es el concepto basico de una variable "local"

// Si declaras una variable dentro de una funcion, usando "var" esa variable va ser de tipo "local" y se puede usar dentro de la funcion, pero solo dentro del cuerpo de una funcion (es decir todo lo que abarquen dentro de las llaves de una funcion).
// Entonces eso quiere decir que no podemos utilizar esa variable fuera de la funcion en el programa principal o en otras funciones

// Entonces... ya sabemos la diferencia entre una variable "local" y una variable "global".














// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------