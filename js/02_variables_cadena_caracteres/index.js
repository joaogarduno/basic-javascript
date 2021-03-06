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
// ------------------------------------------------------




// TEMA 25: Agregar Variables a cadenas de caracteres

// Tambien podemo usar una sintaxis de un operador visto en tema anteriores, para concatenar cadena de caracteres a variables

var mensajeCompleto = 'Aprendiendo a programar ';
var parteFinal = 'con motivacion y paciencia';

// Vamos a mostrar el mensaje completo antes de concatenar la parte final y luego vamos a concatenar la parte final
console.log(mensajeCompleto);

// Este es el proceso de concatenacion
mensajeCompleto += parteFinal;
// mensaje completo una vez que ya esta actualizado
console.log(mensajeCompleto);

// Ahora entendemos como formar cadenas concatenando otras cadenas que estan guardadas no asignadas a una variable
// ------------------------------------------------------




// TEMA 26: Longitud de una Cadena de Caracteres

// Como podemos realizar una operacion que es extremadamente comun en programacion

// Encontrar la longitud de una cadena

// La longitud o tamaño se refiere simplemente a cuantos caracteres tiene una cadena de caracteres, incluyendo espacios y cualquier simbolo que esta pueda tener.


// Ejemplos:
// Si declaramos la siguiente variable "miCadena" vamos asignar distintos valores
var miCadena;

// Por ejemplo la cadena puede esta formada por un solo caracter, puede ser cualquier caracter (simbolo, espacio, letra, etc.)
miCadena = 'AB ';

// digamos que en nuestro programa necesitamos saber cuantos caracteres contiene esa cadena.

// Lo que podemos hacer es escribir el nombre de la variable y en donde necesitemos usar ese valor de la longitud
console.log(miCadena.length);
// Esta propiedad de la cadena (.length) nos va a permitir saber cuantos caracteres contiene
// ----------------

// OTRO EJEMPLO:
// Cuantos caracteres tiene esta cadena:
miCadena = 'JavaScript';
console.log(miCadena.length);

miCadena = '¡Estoy aprendiendo a programar en JavaScript!';
console.log(miCadena.length);
// ------------------------------------------------------




// TEMA 27: Notacion de corchetes: Primer Caracter
    // -> recordar que este nombre se utilizo en el ejemplo anterior a la hora de hacer commit

// Esta es una notacion que nos permite acceder a los caracteres individuales de una cadena.

// Veamos como poder accer al primer caracter de una cadena
var lenguajeDeProgramacion = 'JavaScript';

// "JavaScript" esa cadena de caracteres tiene una estructura interna, que nos va a permitir acceder a sus caracteres

/*
Cadena:  J a v a S c r i p t
Indices: 0 1 2 3 4 5 6 7 8 9
*/

// Cada uno de esos caracteres de la cadena tiene un indice asociado, que es un numero entero que comienza en cero y se incrementa en uno para cada caracter hacia la derecha

// El primer caracter de la caderna esta ubicado en el indice 0 (cero), y podemos usar ese indice para acceder a ese caracter
console.log(lenguajeDeProgramacion[9]);
// con esto ya sabemos como poder acceder al primer caracter
// ------------------------------------------------------




// TEMA 28: Inmutabilidad de Cadenas de Caracteres

// ¿Qué implica que sean inmutables?

// mutables significa que se pueden cambiar

// e inmutables significa que no se pueden cambiar 

// Entonces una vez que nosotros definimos una cadena de caracteres en el programa no podemos cambiar sus elementos individuales, es decir, sus caracteres

// Ejemplos:
// INMUTABILIDAD
var miCadena = 'Jola Mundo'; // una letra que depues vamos a querer cambiar
console.log(miCadena);

// tratar de cambiar el error de nuestra cadena cambiando el caracter dependiendo su indice

// Y para hacer eso hacemos lo siguiente
miCadena[0] = 'H'; // esto nos causara un Error
// Entonces esto nos va a causar un error, pero, ¿Por qué? porque las cadenas son Inmutables, es decir no puedes cambiar los caracteres individuales de la cadena
// Lo que podemos hacer es reasignar la cadena completa

// Notar que aqui no tratamos de cambiar un indice en especifico si no que reasignamos completamente el valor de la variable
miCadena = 'Hola Mundo';
console.log(miCadena);

// Entonces no podemos cambiar ningun caracter de forma individual de esta cadena porque son INMUTABLES
// ------------------------------------------------------




// TEMA 29: Notación de Corchetes: Enésimo Carácter

// Retomaremos el tema anterior que estabamos viendo "TEMA 28: Inmutabilidad de Cadenas de Caracteres" 

// ¿Como usar la notacion de corchetes para acceder a los caracteres individuales de una cadena?, porque no solamente puedes acceder al primer caracter de la cadena, puedes acceder a cualquier caracter, comenzando a contar desde cero

// Ejemplo:
var miCadena = "JavaScript";

// Otra vez tomamos el ejemplo anterior el diagrama
/*
Cadena:  J a v a S c r i p t
Indices: 0 1 2 3 4 5 6 7 8 9
*/

// Podemos ver el indice que corresponde a cada uno de esos caracteres
// por ejemplo el "indice 4" corresponde al caracter "S", el indice 7 corresponde al caracter "i" y asi sucesivamente, incrementado de 1 por cada caracter en la cadena

// ¿Como podemos acceder a cada uno de ellos?
// usando sus indices con la notacion que ya aprendimos
console.log(miCadena[6]); // "r"
console.log(miCadena[2]); // "v"

// ¿Qué pasa si nosotros usamos un indice que esta fuera de los limites permitidos?
console.log(miCadena[10]); // el resultado no sera un "error" si no que sera un "undefined"
console.log(miCadena[5.6]); // sera un "undefined"
// ------------------------------------------------------




// TEMA 30: Notación de corchetes: Último carácter

// Tambien podemos utilizar la notacion de corchetes para poder encontrar o acceder al ultimo cracter de una cadena

// ¿Qué pasa si solo queremos entrar al ultimo caracter? y en verdad no sabemos explicitamente cual es el ultimo indice

// automatizamos para que pueda funcionar en cualquier cadena de cualquier tamaño o longuitud

// 
var miCadena;

/*
El ultimo indice siempre es longitud -1 porque comenzamos a contar desde 0

miCadena.lenght para "Javascript" es 10.
El último índice es 9.

Cadena:  J a v a S c r i p t
Indices: 0 1 2 3 4 5 6 7 8 9

*/

// Ahora como podemos representarlo de una forma general que aplique a cualquier cadena
miCadena = "Javascript"
console.log(miCadena[miCadena.length -1]); // miCadena.length -> representa el indice - ademas de que va dentro de corchetes

// OTRA
miCadena = "Python"
console.log(miCadena[miCadena.length -1]);

// Aprendeimos como acceder al ultimo caracter de una cadena de caracteres.
// Recuerda que es la longitud de la cadena menos uno
// ------------------------------------------------------




// TEMA 31: Notación de corchetes: De derecha a izquierda

// Para terminar el tema completamente de "Como podemos usar la notacion de corchetes para acceder a los caracteres de una cadena"

// Si nosotros llegamos al final de la cadena y queremos el penultimo o el antepenultimo caracter o el caracter que esta antes del antepenultimo

// Y otro forma de hacerlo, de tal manera que podemos contar desde el final de la cadena hacia el principio para tener el caracter especifico.
var miCadena;

/*

El penultimo indice es la longitud menos 2 (-2), porque comenzamos a contar desde 0

miCadena.length es 10. Por lo tanto el penultimo indice es 8.

Cadena:  J a v a S c r i p t
Indices: 0 1 2 3 4 5 6 7 8 9

*/

miCadena = "Javascript";
console.log(miCadena[miCadena.length - 2]); // -2 porque queremos el segundo caracter de derecha a izquierda

// Tambien existe otra forma, en lugar de colocar el numero de forma explicita, podrias declarar una variable "n"
miCadena = "Javascript";
n = 4;
console.log(miCadena[miCadena.length - n]);
// Descubrimos como poder acceder a los caracteres de una cadena de izquierda a derecha y de derecha a izquierda
// ------------------------------------------------------




// TEMA 32 - PROYECTO 1: Palabras en Blanco

// PROYECTO 1

// Version del juego muy popular que se llama "math lips" o "historias locas" en nuestra version seria "palabras en blanco"

// vamos a practicar como concatenar cadena de caracteres tenemos 4 cadenas que representan 4 elementos distintos de una oracion
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrio";
var miAdverbio = "rapidamente";

/*

Concatena las cadenas para crear una cadena que muestre un mensaje.
Puedes cambiar los valores de las variables.

Por ejemplo: El perro negro corrió rápidamente a la tieneda.
             La bicicleta pequeña volo a la tienda lentamente.

*/

// Objetivo del juego:
    // Concatenar las cadenas para crear una cadena que muestre un mensaje, podemos cambiar el valor de las variables

// Entonces vamos a tener que concatenar muchas cadenas para formar nuestra oracion final

// Recuerda que.... no tiene que tener la oracion sentido ya que finalmente el juego original tambien se llama "historias locas" puedes hacer cualquier oracion graciosa tambien.

var palabrasEnBlanco = "El " + miSustantivo + miAdjetivo + miVerbo + miAdverbio + " a la tienda.";
console.log(palabrasEnBlanco);

// si nos damos cuenta al imprimir el resultado, no estamos incluyendo espacios entre las palabras entre cada una de las variables ya declaradas y asignadas.
// ------------------


// OTRA FORMA
// Para agregar el espacio simplemente escribimos una cadena que contiene un espacio y lo concatenamos con ambas cadenas
var palabrasEnBlanco = "El" + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + "a la tienda.";
console.log(palabrasEnBlanco);
// ------------------


// OTRO EJEMPLO:

// PRUEBA
// "La bicicleta pequeña voló a la tienda lentamente".
var miSustantivo = 'bicicleta';
var miAdjetivo = 'pequeña';
var miVerbo = 'voló';
var miAdverbio = 'lentamente';


// Sustituir la parte del codigo de concatenacion para crear la segunda oracion.
var palabrasEnBlanco = `La ${miSustantivo} ${miAdjetivo} ${miVerbo} a la tienda ${miAdverbio}.`;
console.log(palabrasEnBlanco);

// Ya practicamos como concatenar cadena de caracteres, recuerda siempre estar pendiente de los espacios y de los simbolos que son necesarios del principio y al final de la cadena


















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------