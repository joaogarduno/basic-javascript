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

// Vamos a escribir una funcion con 2 lineas y tambien vamos a gregarle la capacidad de recibir valores de tomar valores cuando la llamamos.

// ¿Que es lo que vamos a sumar? ¿Que operadores vamos a utilizar y que valores vamos a tener? y para eso dentro del parentesis de la funcion vamos a escribir 2 nombres los cuales, todo lo que se escriba dentro de ese parentesis se le conoce como "prametros"
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
















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------