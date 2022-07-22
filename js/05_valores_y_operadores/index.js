// TEMA 52: Valores Booleanos

// Hablaremos de otro tipo de datos con el cual podemos trabajar en javascript, y es el tipo de datos de "valores booleanos"

// En JavaScript formalmente ese tipo de datos se denomina "booleans"
// Esos valores booleanos en JavaScript son "Verdadero" y "Falso", que en el lenguaje de programacion se escribe o se conocer como "TRUE" y "FALSE".

// Estos son los dos valores booleanos (TRUE y FALSE) con los cuales podemos trabajar en JavaScript, pero es muy importante que conozcamos como poder escribirlos para que se reconozcan como esos valores especiales en el lenguaje, y estas es la unica forma de escribirlos formalmente  en el lenguaje para que se reconozcan como esos valores especiales en el lenguaje.

// Esta es la unica forma de escribirlos formalmente en el lenguaje para que se reconozcan con sus capacidades especiales de valores de verdad.

// Por ejemplo si nosotros queremos demostrar el valor TRUE, podemos ver que cuando lo escribimos en el codigo su color cambia, porque es un valor especial en el lenguaje.
console.log(true);

// PEro si lo escribimos en nuestro lenguaje con una letra mayuscula al inicio, notamos que ya el color no es el mismo
console.log(True);

// Veamos en consola que sucede con estas 2 forma, y notamos que el primer TRUE si es correcto y vemos como resultado en consola TRUE, pero en el segundo, notamos un error, y nos dice que "True" no esta definido ¿Por qué? porque como "True" no esta definido no lo reconoce, es decir, no esta escrito correctamente con una "T" mayuscula y el lenguaje no lo reconocer como una palabra especial en el lenguaje.

// Tambien si lo escribimos con cualquier otra convinacion de mayusculas o minusculas, podemos ver que no va a funcionar.
console.log(TRUE);
console.log(TrUe);
console.log(tRue);
// ----------------



// Lo mismo ocurre con el valor FALSE, tiene que estar escrito completamente en minuscula.
console.log(false);

// cualquier otra convinacion nos va a dar error.
console.log(FALSE);
console.log(False);

// Entonces la unica forma de escribir FALSE como el valor Booleano y se interprete como el valor correcto que podemos usar en nuestro programa, es escribir "true" y "false" completamente en minuscula.

// Estos valores "true" y "false" van a ser muy utiles cuando empecemos a escribir condicionales, cuando empecemos a realizar comparaciones de valores y cuando trabajemos con operadores logicos.
// ------------------------------------------------------------------




// TEMA 53: Operador de Igualdad

// En JavaScrpt puedes comparar valores para saber si son iguales o si no son iguales, si representan en el mismo valor.

// Eso lo podemos hacer con el operador de igualdad.
console.log(5 == 5); // esto que tenemos aqui (entre parentesis) se denomina expresion.
// Va a evaluar a "verdadero" o "falso", es verdero si ambos valores son iguales y es falso si los valores son distintos, ese valor final booleano se va a mostrar en la consola, asi que el resultado va a ser TRUE.
// ----------------



// OTRO EJEMPLO:

// Pero si cambiamos el valor a 6 ahora veremos que es FALSE, porque los valores no son iguales.
console.log(6 == 5);
// ----------------



// OTRO EJEMPLO:

// Y de igualforma podemos comparar cadena de caracteres
console.log('Hola' == 'Hola');
// Esta expresion es verdadera asi que el resultado sera TRUE

// Y si comparamos "Hola" con cualquier otra cadena, por ejemplo
console.log('Hola' == 'Javascript'); // el resultado sera FALSE
// ----------------



// OTRO EJEMPLO:

// La comparacion tambien se hace en base a mayusculas y minusculas.

// Por ejemplo si tenemos 2 cadenas "Hola" y "hola"
console.log('Hola' == 'hola'); // nuestro resultado sera FALSE

// Porque uno de los caracteres es mayuscula a diferencia de la otra que es minuscula, asi que no son iguales.
// ----------------



// OTRO EJEMPLO

// Es importante tambien saber que no deberiamos de comparar "arreglos" con este operador " == ".
// ¿Por qué...?
console.log([1,2,3] == [1,2,3]);
// Porque si nosotros tenemos 2 arreglos con los mismos elementos y estamos comparando los arreglos con los mismos elementos 1,2,3. Podriamos pensar que es TRUE porque son iguales visualmente, tiene los mismos elementos, pero veamos el resultado en consola

// Notamos que el resultado es FALSE, ¿Por que? porque este operador cuando se aplica a los arreglos no compara los elementos del arreglo, si no que compara si los arreglos en la memoria representan el mismo objeto.

// Entonces lo importante de todo esto, es que, no deberiamos compara arreglos con este operador
// ------------------------------------------------------------------




// TEMA 54: Operador de Igualdad Estricta

// Tambien tenemos otro perador que nos permite comparar si ambos tipos de datos son los mismos o no, este es el operado de igualdad estricta.

// Veamos la diferencia entre "igualdad" e "igualdad Estricta"

// Si nosotros comparamos 2 valores de el mismo tipo de dato con el operador de igualdad, este resultado va a ser verdadero.
console.log(9 == 9); // este resultado sera verdadero TRUE

// Pero... que va a pasar si nosotros tenemos 2 valores que son de distintos tipos de datos, pero que representan el mismo numero el resultado sera TRUE
console.log(9 == '9'); // Tambien sera verdadero (TRUE)

// Entonces notamos que el valor es verdadero para ambas comparaciones y en ciertas circunstancias tambien nos gustaria comparar si el tipo de dato es el mismo para ambos operandos.

// Pero... que ocurre con este operador ( == )
// Antes de realizar la comparacion ambos valores se convierten a un tipo de dato comun, es por eso que el resltado que nos da es un TRUE, no importa que sean de diferentes tipos de datos si representan el mismo valor, pero si no queremos que eso ocurra, y queremos que la comparacion tambien determine si el tipo de dato es el mismo o no, simplemente tenemos que agregar un signo igual... " === " a este operador para tener el operador de comparacion de "Igualdad Estricta"
console.log(9 === 9); // en este caso el resultado sera TRUE
// ¿Por qué? porque ambos valores son iguales y tienen el mismo tipo de dato.

// Pero... esta es la gran diferencia entre ambos operadores
console.log(9 === '9'); // FALSE
console.log(9 === 9); // TRUE

// Si comparamos "nueve" como un numero y "nueve" como una cadena de caracteres con el operador de igualdad estricta, este resultado sera falso como lo podemos ver en el ejemplo de antes.

// Porque no se van a convertir a un tipo de dato comun, solamente se van a comparar en base a su valor y a su tipo de dato
console.log(9 == '9'); // TRUE
console.log(9 == 9); // TRUE

console.log(9 === '9'); // FALSE -> porque los tipos de datos son distintos
console.log(9 === 9); // TRUE

// Entonces... ya sabemos como comparar valores con "igualdad estricta" y su diferencia con el operador de "igualdad"

// Si quieres que se convierta a un tipo de dato comun antes de compararlos, usa el operador de "igualdad" ( == )
// Y si tambien quieres comparar el tipo de dato usa el operador de "igualdad estricta"
// ------------------------------------------------------------------




// TEMA 55: Practica como Comparar Valores

// Practicaremos como podemos ocupar el valor de igualdad y el operador de igualdad estricta

// Empezaremos declarando 2 variables, y a estas variables les vamos asignar valores y los vamos a comparar y nuestro "Trabajo" es predecir cual va ser el valor de la comparacion
var a;
var b;

a = 5;
b = 5;

// ¿Cual es el nombre de este operador? Este es el operador de Igualdad, y nos retorna un valor de TRUE
console.log(a == b); // TRUE

// ¿Cual es el nombre de este operador? Este es el operador de Igualdad Estricta y nos retorna un valor de TRUE
console.log(a === b); // TRUE

// ¿Por qué ambos tienen el valor de TRUE?
// ----------------



// OTRO EJEMPLO

var a;
var b;
// Ahora si decidimos cambiar el valor a la variable "b" y mantener el valor "a" que es 5
a = 5;
b = 8;

// Ahora vamos a ver en que resulta estas comparaciones
console.log(a == b); // Aqui estamos ocupando el valor de igualdad y estamos comparando 5 y 8
// ¿Y que resultado nos mostrara esta expresion? Seria FALSE

// Ahora si usamos el operador de igualdad estricta, cual sera el resultado?? porque los valores son distintos.
console.log(a === b);
// Aunque tengan el mismo tipo de dato, es decir aunque sean del mismo tipo de dato, sus valores son distintos
// ----------------



// OTRO EJEMPLO:

// Ahora digamos que actualizamos "b" a la cadena de caracteres 5
var a;
var b;

a = 5;
b = '5';

// Ahora si comparamos a y b, cual va ser el valor de esta expresion con el operador de igualdad
console.log(a == b); // TRUE
// ¿Por qué nuestro resultado es TRUE? Porque estamos ocupando el valor de "Igualdad", no el operador de "Igualdad Estricta"

// Ahora si ocupamos el valor de igualdad estricta
// ¿Cual sera el resultado de esta expresion? FALSE
console.log(a === b); // FALSE
// Recordar que los tipos de datos son distintos
// ----------------



// OTRO EJEMPLO

// Tambien podemos compara cadena de caracteres
a = 'JavaScript';
b = 'JavaScript';

// ¿Cual sera el resultado de ambas?
console.log(a == b); // TRUE
console.log(a === b); // TRUE

// Ya practicamos como comparar valores con estos operadores el operador de "Igualdad" y el operador de "Igualdad Estricta"
// ------------------------------------------------------------------


















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------