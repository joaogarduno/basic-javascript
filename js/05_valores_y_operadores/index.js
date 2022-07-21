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



















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------