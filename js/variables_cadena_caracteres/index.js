// TEMA 19: Variables con cadenas de caracteres

// Usamos cadena de caracteres para representar texto en nuestro codigo, por ejemplo si queremos representar un nombre podemos crear una cadena de caracteres
// y podemos asignarle una variable para poder usarla en nuestro programa
var nombre = 'Pedro';

// La cadena de caracteres se definen o se crean en el programa rodeandolas con comillas ("")
// Estas pueden ser "comillas dobles" o "comillas simples" ambas funcionan 

// existe una cierta restrigcion en usar cada una de estas.

// Entonces todos los caracteres que se encuentran en medio de las comillas son considerados parte de la cadena de caracteres, incluyendo:
    // los espacios -> tienen un lugar especifico en la cadena y se considera como otro caracter.
    // cualquier simbolo -> cualquiera que podamos escribir con el teclado tambien se considera un caracter en la cadena.
    // cualquier letra
    // cualquier numero
    // cualquier simbolo -> por ejemplo un guion bajo (_)

// Los operadores pierden su poder cuando estan entre comillas por lo que se comportan diferente y no ejecutan una operacion solamente representan los simbolos que son

var apellido = 'Saldaña Medrana';


// Al momento de usar las comillas dobles y simples, es que seas consistente no puedes comenzar con una comilla simple y terminar con una comilla doble porque tendremos un error

// var apellido = 'macarena ferrano";
// Esto es un error
// ------------------------------------------------------



// TEMA 20: Escapar comillas en cadenas de caracteres

// En el tema anterior se vio lo siguiente...
// ¿Como definir una cadena de caracteres? ¿Con comillas dobles o comillas simples?

// Pero existe un solo caso en el que cada una de estas, en el que puede causar problemas lo que nos obliga a que tipo de comillas elegir.
var miCadena = "imprimo una cadena de caracteres normal, con comillas dobles";

// Pero que pasa si yo quiero que en mi cade de caracteres lleve comillas....

// Ejemplo
// Cuando queremos incluir comillas dentro de una cade de caracteres necesitamos utilizar un tipo especifico de comillas, es decir, si quieres hacer lo siguiente...
var miCadena = "Soy una cadena de "caracteres"";
// Esto nos da un error ya que como se comento antes debemos utilizar un tipo de comillas especifico si la situacion es similar a la que estamos viendo

// Existen varias formas para solucionar este tipo de problemas
    // - Escapar
    // - 

// ejemplo 1: "Escape"
// esto omite las comillas y considera como su fuera parte de la cadena y no como un caracter especial que tiene una funcion dentro de la cadena, si no que una cadena mas en la cadena de caracteres.
// Eso lo logramos con...
var miCadena = "Soy una cadena de \"caracteres\"";
console.log(miCadena);
// Lo hacemos con la barra invertida antes de las comillas
// ----------------




// TEMA 21: Cadena de Caracteres con Comillas Simples

// Tambien podemos definir cadena de caracteres con comillas simples
var miMet;

miMet = 'Jugando con "JavaScript"';
console.log(miMet);

// TAMBIEN SE PUEDE...
var message;

message = "Jugando con 'Javascript'";
console.log(message);
// ------------------------------------------------------




// TEMA 22: Secuencia de escape

// Existe algo que se denomina "secuencia de escape"

/*
SECUENCIA DE ESCAPE:

Codigo | Resultado
--------------------
\'      Comilla simple
\"      Comilla doble
\\      Barra invertida
\n      Línea Nueva
\r      Retorno de Carro
\t      Tabulación
\b      Retroceso
\f      Salto de página
...

*/

// La secuencia de escape son una combinacion de caracteres que no se representan a si mismos en una cadena de caracteres
// La tabla anterior son algunas de las secuencias de escape que podemos usar

// COMILLAS DOBLES:
console.log("Estoy jugando y aprendiendo \"JavaScript\"");

// BARRA INVERTIDA:
console.log("Estoy jugando y aprendiendo \\ JavaScript");

// Linea nueva en la cadena
console.log("Estoy jugando... \ny aprendiendo JavaScript");
// ------------------------------------------------------




// TEMA 23: Concatenar cadenas de caracteres

// Tambien podemos unir cadena de caracteres

// Esto suele ser muy util cuando necesitamos formar una sola cadena a partir de varias cadenas, y podemos hacerlo con el operador de "suma" "+".

var nombreCompleto = "Joao " + "Garduno";
console.log(nombreCompleto);

// Otra alternativa
var nombreCompleto = "Joao" + " " + "Garduno";
console.log(nombreCompleto);
// ------------------------------------------------------




// TEMA 24: Construir cadenas con variables

// Tambien podemos contruir cadenas con variables

//  Lo hacemos con el mismo operador ( + ) que utilizamos para concatenar las cadenas
var verbo = 'Programar';

// Podemos usar esa varible para poder concatenar las cadenas y generar un mensaje
var mensaje = 'Estoy aprendiendo a ' + verbo; // asi es como se concatena con el operador de la SUMA (+)
console.log(mensaje);


// Tambien podemos concatenar esa misma varible que contiene una cadena en cualquier punto de la misma cadena, es decir en cualquier punto del mensaje
var verbo = 'Programar';

var mensaje = 'Estoy aprendiendo a ' + verbo + 'con amor y paciencia';
console.log(mensaje);

// Esto es util cuando queremos personalizar el valor de una cadena, porque podemos simplemente tomar el valor de una varible y va a parecer el mensaje o como un resultado que podemos usar en nuestro programa
















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------