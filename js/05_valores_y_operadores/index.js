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




// TEMA 56: Operador de Desigualdad

// Asi como tenemos un operador de "Igualdad", tambien tenemos un operador de "Desigualdad"

// Este operador compara 2 valores y retorna TRUE (Verdadero) si su valor es distinto y retorna FALSE (Falso) si son iguales.

// Es basicamente lo opuesto del operador de igualdad

// En la siguiente linea de codigo lo leemos "9 Distinto de 6", en ingles este operador se denomina "Not Equal Too" (No igual a...) seria su trduccion literal
console.log(9 != 6) // TRUE
// Estamos comparando si 9 "no es igual" a 6 y eso es verdadero ya que se cumple

// LA expresion anterior evalua la expresion TRUE
// ----------------



// OTRO EJEMPLO

// Si tenemos dos numero iguales, por ejemplo
console.log(9 != 9); // FALSE
// Aqui si tenemos un resultado de FALSE, porque estamos preguntando si 9 es distinto a 9, en ese caso seria FALSA la condicion

// La logica es basicamente lo opuesto del operador de igualdad
// Entonces...
    // si los elementos son iguales seria ---> FALSE
    // si los elementos son distintos seria ---> TRUE
// ----------------



// OTRO EJEMPLO:

// Strings o caracteres.

// Tambien podemos comparar cadena de caracteres, por ejemplo...
console.log('JavaScript' != 'JavaScript'); // FALSE
// Este resultado es FALSE porque son iguales

// pero si cambiamos alguna letra de ese string seria de tipo TRUE
console.log('JavaScript' != 'Javascript'); // TRUE
// ----------------



// OTRO EJEMPLO

// Arrays o Arreglos

// En el caso de los arreglos tenemos algo tambien interesante

// Podemos comparar Arreglos con este operador
console.log([1,2,3] != [1,2,3]); // TRUE
// Estamos preguntando si el primer arreglo es dintinto al otro

// Pero aun asi no va estar comparando en base a sus elementos si no en base a como estan representados como objetos en la memoria del dispositivo

// En este caso es TRUE porque vemos que tienen los mismos elementos

// El TRUE lo que representa es que estos 2 arreglos son objetos independientes en la memoria de la maquina o del dispositivo y eso es algo relacionado a como se almacenan estos valores en la memoria

// Ahora entendemos como utilizar el operador de "Desigualdad" y su representacion de este signo es el siguiente -> !=
// !=  --> Simbolo de "Desigualdad"
// ------------------------------------------------------------------




// TEMA 57: Operador de Desigualdad Estricta 

// Tambien tenemos al operador que es similar al de igualdad estricta, pero compara desigualdad estricta.

// Veamos la diferencia entre "Desigualdad" y "Desigualdad Estricta" 

// Anteriormente con el operador de "Desigualdad", si nosotros comparabamos...
console.log(1 != '1'); // FALSE
// nuestro resultado seria Falso, porque este operador ( != ) convierte a ambos operandos ambos valores a un tipo de dato comun antes de hacer la comparacion, es por eso que es Falso.
// El detecta que esos 2 numeros son el mismo valor, aunque uno este representado como una cadena de caracteres y el otro sea un numero como tal.

// Pero que ocurre con el operador de desigualdad stricta, si nosotros comparamos estos mismos valores con el operador de "Desigualdad Estricta", nuestro resultado seria verdadero (TRUE)
console.log(1 !== '1'); // TRUE
// Por que?, porque esta comparando si ambos valores son del mismo tipo de dato, no lo combierte a un tipo de dato comun

// Y esa es la diferencia entre el operador de "Desigualdad" y el operador de "Desigualdad Estricta", funcionan exactamente igual excepto en este caso, cuando los valores son de distinto tipo de dato, pero representan el mismo valor.

// Es decir... 
    // este lo combierte a un tipo de datos comun ----> console.log(1 != '1');
    // Y este no -----> console.log(1 !== '1');
// Esa es la diferencia

// Asi que ya sabes como trabajar con el operador de "Desigualdad" y el operador de "Desigualdad Estricta" y cuando debes usar uno u otro.
// ------------------------------------------------------------------




// TEMA 58: Operador Mayor que

// En JavaScript ademas de comparar si 2 valore son iguales o diferentes, tambien podemos comparar el valor relativo de 2 valores, si un valor es "mayor que el otro", o "mayor o igual que el otro", "menor que el otro" o "menor o igual que el otro"

// Entonces hablaremos de el Operador "Mayor que", ese operador tiene es representado con simbolo ">" y podemos comparar los valores con este operador.

// digamos por ejemplo que queremos comparar, si 6 es "mayor que" 5.
console.log(6 > 5); // "SI" es mayor que 5 es TRUE (Verdadero)
// ----------------



// OTRO EJEMPLO:

// Tambien podemos compara valores
console.log(3 > 10); // FALSE (Falso)
// No hay nigun problema si este elemento es menor, lo que va a ocurrir es que la expresion sea falsa
// ----------------



// OTRO EJEMPLO:

// Tambien podemos usar este operador para comparar cadenas de caracteres, pero.. ¿Qué criterio vamos a ocupar para las cadenas por defecto?
// JavaScript compara las cadenas segun el orden alfabetico, como normalmente aparecerian en un diccionario
console.log("B" > "A"); // TRUE
// ----------------



// OTRO EJEMPLO:

// Si tuvieramos otra cadena
console.log("ACB" > "ABC"); // TRUE
// ¿Cual seria el resultado de la comparacion de estas cadenas?
// Puede ser curioso el resultado ¿Por qué?, porque como comparamos cadenas si comienzan con la misma letra.

// Lo que hace JavaScript es comparar cada uno de los caracteres en su secuencia.
    // A es igual a A -> 
    // C viene despues que B en orden alfabetico -> Si C viene despues de que B en orden alfabetico, entonces ahi ya podemos determinar el orden de las cadenas.

// Entonces como resultado de esa comparacion de caracteres es TRUE.

// Asi es como se comparan cadenas de caracteres en JavaScript
// el primer par de caracteres en sus posiciones correspondientes que no sean iguales se comparan y esa comparacion decide el resultado de la expresion.

// Veamos los resultados en la consola, y nos da un TRUE de esa comparacion de caracteres
// ----------------



// OTRO EJEMPLO

// Tambien que pasa si una cadena tiene mas caracteres que otra, por ejemplo:
console.log("AB" > "A"); // TRUE
// Y vemos en consola como resultado verdadero, y es verdadero porque tiene mas caracteres.
// ----------------



// OTRO EJEMPLO:

// Por orden alfabetico tambien podemos comparar palabras.
console.log("Mundo" > "Hola"); // TRUE
// Por oden alfabetico "M" viene luego de la letra "H" en el alfabeto, asi que tambien  podemos comparar estas letras para nosotros tener una idea del orden "M" y "H"

console.log("M" > "H") // TRUE
// Entonces, esta comparacion es verdadera, es por eso que la anterior comparacion de caracteres que hacemos de "Mundo" y "Hola" es tambien es verdadera, porque "Mundo" viene despues de "Hola" en el diccionario
// ----------------



// OTRO EJEMPLO:

// Otro dato interesante que seguramente utilizaremos en nuestros proyectos, es que podemos usar estos operadores de comparacion con variables y normalmente eso es lo que vamos hacer
var a = 15;
var b = 7;

// Nosotros podemos usar esas variables y compararlas
console.log(a > b); // TRUE

// Y tambien podemos preguntar si "B" es mayor que "A" lo cual seria FALSE
console.log(b > a); // FALSE

// Entonces ya sabemos compara numeros, cadenas de caracteres, y tambien variables para comparar sus valores con el operador "Mayor que" ( > )
// ------------------------------------------------------------------




// TEMA 59: Operador "Mayor o igual que"

// En JavaScript tambien tenemos otro operador que nos permite incluir el caso en el que ambos valores sean iguales y se llama "Mayor o igual que" y su simbolo es " >= " ese es el simbolo de "mayor o igual que"

// ¿Que es lo que vamos a comparar y como va a ser diferente del operador mayor que?

// Si nosotros comparamos si...
console.log(5 > 5); // usando el operador "Mayor que" este resultado seria ---> FALSE
// ¿Por qué? porque estamos preguntando si 5 es "estrictamente mayor que 5" no estamos incluyendo el caso de que 5 pueda ser igual a 5

// Esto es importante y esto es una fuente comun de confusiones cuando estamos programando tenemos que decidir  si queremos incluir el caso en que ambos valores sean iguales, si no lo queremos incluir usamos ese operador "Mayor" (>)

// Y en el caso de que sean iguales la condicion sera Falsa, pero si queremos incluir ese caso tenemos que ir a la siguiente condicion que usa el operador "Mayor o igual que"
console.log(5 >= 5); // TRUE
// Podemos ver el simbolo de "mayor que" pero con el signo de "igual" a la derecha, esta condicion nos regresa un valor VERDADERO si ambos valores son iguales, entonces en este caso el valor es TRUE

// Esto es muy importante porque vamos a empezar a escribir condiciones en nuestro codigo que van a decidir que es lo que pasa en el programa y dependiendo del valor de estas condiciones, vamos a ejecutar ciertos bloques de codigo o no.

// La condicion sigue siendo verdadera si ambos valores sean iguales.

// Y esta es la diferencia principal entre estos 2 operadores.

// En el caso de las cadenas de caracteres tambien aplica este cambio, cuando las cadenas de caracteres sean iguales el valor retornado va ser TRUE
// ------------------------------------------------------------------




// TEMA 60: Operador "Menor que"

// En JavaScript tenemos otro operador llamado "Menor que" y se puede expresar con este simbolo ( < )

// Si queremos verificar si 5 es menor que 6 utilizamos ese operador (<)
console.log(5 < 6); // TRUE
// Si 5 es menor que 6 el resultado sera TRUE

// En caso contrario si el valor a la izquierda es mayor que el de la derecha o igual sera falso
console.log(10 < 3); // FALSE
// 10 no es menor que 3 asi que el resultado sera falso y asi es basicamente como funciona el operador
// ----------------



// OTRO EJEMPLO

// Tambien se puede usar para comparar cadena de caracteres como lo hicimos con operador "Mayor que"
// En este caso va a comparar la cadena de caracteres en orden alfabetico

// Asi que si comparamos "A" con "B" como cadena de caracteres el resultado sera TRUE, porque "A" viene antes de "B" en orden alfabetico
console.log("A" < "B"); // TRUE
// ----------------



// 

// Tambien si la cadena de caracteres tiene varios caracteres el proceso sera muy similar al que ya vimos en los ejemplos anteriores
// Se van a comparar los caracteres "B" si esta antes que "C" en orden alfabetico asi que la condicion seria verdadera
console.log("ABC" < "ACB"); // TRUE
// Eso es lo que determina el valor de la condicion  
// ----------------



// OTRO EJEMPLO
// 
// Tambien podemos comparar los valores de variable, que es lo que haremos con nuestros programas normalmente.
// Si definimos 2 variables y las queremos comparar con este operador ¿Qué es lo que hacemos?, las comparamos simplemente
var a = 15;
var b = 7;

console.log(a < b); // FALSE
console.log(b < a); // TRUE

// Con esto aprendimos como utilizar el operador "Menor que".
// ------------------------------------------------------------------

















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------