// TEMA 1: Comentarios

// los comentarios se ignoran

// Comentario de una sola linea

/* Comentario de 
Varias lineas */
// ------------------------------------------------------


// TEMA 2: Tipo de datos

// En JavaScript se trabajan con valores, y cada uno de estos valores tienen un tipo especifico de dato cada uno de ellos dependiendo de su proposito dentro del codigo.

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


// TEMA 6: Inicializar Variable

// Ahora que entendemos todo este proceso de crear variables, declararlas y asignar los valores
var x = 9; // inicializando la variable

// Al declarar la variable (en este caso) tambien le estamos asignando un valor a la variable que es "9"
// A esto se le conoce como "inicializando una variable".
// La estamos creando y al mismo tiempo la estamos inicializando.

var miIdioma = 'Español';
// ----------------


// TEMA 7: Variables NO inicializadas

// Es una variable que todavia no tiene un valor asignado

var a; // Esta variable NO ha sido inicializada porque NO tiene un valor
var b; // Recuerda que el valor asigando para este tipo de variables se le conoce como "undefined"

console.log(a);
a = 365;

// Una vez que es asigando el valor a la variable
console.log(a);
// ------------------------------------------------------


// TEMA 8: Mayusculas y Minusculas (Case-sensitive)

// A la hora de declarar variables y al mandarlas a llamar tiene que ser especificamente el mismo nombre tal cual esta asignado a esa varialble por ejemplo:
var myLastName = 'Enriquex';

// si mandamos a llamar de esta manera "MYLASTNAME" nuestra variable, esta, no sera reconocida ya que no cuenta con las mismas caracteristicas de nombre con la que fue declarada.
console.log(MYLASTNAME); // Error 
// Y nos manda un error de "is not defined"

console.log(Mylastname); // Error
// Igual sucede en este caso

// Asi que si queremos mandar a llamar a nuestras variables sin errores tiene que ser exacta la combinacion de mayusculas y minusculas

console.log(myLastName);
// Con este ultimo por fin podemos ver nuestra variable ya que cuenta con la combinacion exacta de letras mayusculas y minusculas y esta fue la que definimos y es la unica que va a reconocer el programa.

// Case-sensitive
    // Es sensible a mayusculas y minusculas en los nombres del programa.
// ------------------------------------------------------


// TEMA: 9 Operaciones Aritmeticas Basicas

// -----> SUMA

// ¿Como podemos sumar 2 numeros en Javascript?
var suma = 7 + 12;
console.log(suma);
// ----------------


// -----> RESTA

// Restar un numero en Javascript

// Asiganamos el resultado a una variable
var resta = 15 - 5; // Resultado Positivo
console.log(resta);

// Vemos si podemos actualizar el valor de esta variable a un valor NEGATIVO
resta = 5 - 15; // Resultado Negativo
console.log(resta);

// Nuestro resultado tambien puede ser CERO
resta = 15 - 15;
console.log(resta);
// ----------------


// -----> MULTIPLICACIÓN

// Podemos multiplicar los numeros en Javascript
var producto = 5 * 3;
console.log(producto);

// Actualizamos el valor de la variable "producto"
producto = 9 * 0;
console.log(producto);

// Valores negativos
producto = -5 * 6;
console.log(producto);

// 
producto = 5 * -6;
console.log(producto);

// signos
producto = -5 * -6;
console.log(producto);
// ----------------


// -----> DIVISION

// ¿Como podemos divir un numero entre otro en Javascript?
var cociente = 20 / 2;
console.log(cociente);

// Actualizamos valor de "cociente" y el resultado que esperamos no es un numero entero si no un decimal, tambien podemos manejar ese tipo de casos en Javascript.
cociente = 17 / 31;
console.log(cociente);
// El resultado nos arroja muchos decimales (0.5483870967741935) para poder representar esa fraccion.
// Pero el numero de decimales es finito, porque la computadora puede guardar un numero finito de decimales.
// El numero final es el resultado de redondear una secuencia de numeros que estarian antes y no es el resultado exactamente el que tenemos aqui solo es una aproximacion

// Finalmente vemos el siguiente caso, nos preguntamos que va a pasar, ya que si intentamos dividir entre CERO (0), lo cual no esta definido matematicamente, vamos a obtener algo inesperado
cociente = 3 / 0;
console.log(cociente);
// Cuando vemos el valor que se asigno a la variable es "infinity", es decir equivale a un valor infinito

// ----------------
// ------------------------------------------------------


// TEMA 10: Números Decimales

// Crear numeros decimales en JavaScript

// Seran muy utiles para representar este tipo de numero en nuestro programa
var miNumeroDecimal = 23.4;
// Al encontrar un punto que separa a los numero decimos que trabajeremos o estamos trabajando con decimales

// Otro ejemplo
var peso = 78.34;
// ----------------


// TEMA 11: Operaciones Aritmeticas Basicas con Numeros Decimales

// -----> MULTIPLICAR Números Decimales
// Podemos operar con numeros decimales en Javascript al igual como lo hicimos con los numeros enteros

// Veremos como podemos multiplicar numeros decimales en Javascript
var producto = 3.4 * 10.4;
console.log(producto);
// Multiplicamos 2 valores decimales y el resultado es un numero decimal

// Actualizar esa variable para poder hacer distinta operacion, para poder entender como podemos operar con este tipo de dato
producto = 2.4 * 4;
// Multiplicar un numero decimal por un numero entero
console.log(producto);
// Y nos retorna un numero decimal

// Otra forma
var producto = 6 * 8.9;
console.log(producto);
// En este caso podemos ver el redondeo que ocurre, este producto no se puede representar como un numero decimal con finitos decimales (53.400000000000006), la computadora se tiene que aproximar a ese valor.
// Entonces como no lo puede representar al 100% de forma exacta lo representa con ciertos numeros decimales (53.400000000000006)
// En teoria el resultado si lo hacemos manualmente seria 53.4, pero la computadora no puede representarlo de forma exacta, asi que representa una aproximacion

// Tambien podemos multiplicar por CERO (0)
producto = 3.6 * 0;
console.log(producto);
// Tambien el cero se puede representar como un numero decimal, es equivalente en este caso
// Son 2 tipos distintos de datos pero el valor es el mismo

// Tambien tenemos un "producto" que sea un resultado negativo
producto = -5.7 * 3.4;
console.log(producto);
// Resultado negativo porque alguno de los factores es negativo
// ----------------



// -----> DIVIDIR Números Decimales

// Otra operacion aritmetica que podemos realizar con los numero decimales en JavaScript es Dividir los numeros decimales en JavaScript es dividir los nuemeros decimales.
var cociente = 5.0 / 2.0;
console.log(cociente);
// En este caso es equivalente si colocamos
    // 5.0 / 2.0
    // 5.0 / 2
    // 5 / 2

// Ahora actualizamos esta variable al cociente
cociente = 2.3 / 6.7;
console.log(cociente);
// El resultado es un numero decimal "redondeado" ya que no sera representado de forma exacta


// Ahora intenetemos dividir un numero decimal entre 0.0
cociente = 4.2 / 0.0;
console.log(cociente);
// Recuerda que cuando dividimos entre CERO el valor asignado era infinity o infinito

// Tambien la regla de los signos se vana preservar en la division
// ------------------------------------------------------




// TEMA 12: RESTO de una División

// ¿Como obtener el RESTO de una división en JavaScript?

// Esta operacion es particularmente importante cuando queremos verificar si un numero es "par" o "impar"

// ¿Como obtener el resto de dividir 15 / 5?
var resto = 15 % 5;
// El simbolo de porcentaje es el operador que nos va a permitir obtener el resto de la division

// ¿Como vamos a obtener ese resto?
console.log(resto);

// Actuaizamos la variable
resto = 5 % 5;
console.log(resto);

// Probamos con todos los numero:
    // 5 % 1, 5 % 2, 5 % 3, 5 % 4, 5 % 5,
// ------------------------------------------------------



// TEMA 13: Incrementar el valor de una variable

// ¿Como modificar el valor de una variable en Javascript?

// Alternativa que no es asignar un nuevo valor directamente si no incrementar su valor actual
var librosCompardos = 105;
console.log(librosCompardos);

// Ahora ya sabemos que su valor inicial es 105

// Nuestra primera opcion para poder incrementar su valor a 106 en caso de que la persona decida comprar otro libro nuevo

// OPCION 1
librosCompardos = librosCompardos + 1;
// ¿Que es lo que hace esta linea?
// Esta linea se evalua primero del lado derecho, se analiza que nosotros decimos tecnicamente se evalua cuando resulte un valor especifico, se evalua ese lado derecho la expresion y ese valor resultante se asigna a esta variable --> librosComprados (del lado izquierdo)

// Depues de incrementarla en uno, mostramos su valor
console.log(librosCompardos);


// OPCION 2
// Esta opcion es mas concisa y es la que en general se ocupa en JavaScript y es cuando queremos incrementar el valor en 1
librosCompardos++;
console.log(librosCompardos);

// Esta es la forma de incrementar la variable en uno
// ------------------------------------------------------



// TEMA 14: Reducir el valor de una variable

// Tambien podemos reducir el valor de una variable en JavaScript

// Veamos como poder reducir el valor, el valor actual de una variable en uno

var numeroDeEstudiantes = 256;
console.log(numeroDeEstudiantes);
// Como reducir el valor actual de esa variable en 1

// OPTION 1
// Lo que tenemos que hacer es asignar el nuevo valor a la variable
numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);

// OPTION 2
// Hay una forma mucho mas concisa de escribir esa misma linea de codigo
numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);
// ------------------------------------------------------



// TEMA 15: Asignación de Suma 

// Ya podemos incrementar el valor de nuestra variable en 1 y reducirla en 1

// Pero que pasa si nosotros queremos recirla o incrementarla en otro valor que no sea "1"
var a = 23;

// Queremos incrementar el valor de a en 5
a = a + 5;
console.log(a);

// Pero existe otra forma mas concisa para poder realizar esto
var b = 30;
b += 10;
console.log(b);

// con esto decimos "añade 5 al actual valor de b y asignalo a esa variable"
// que vendria siendo lo mismo que hacer esto -> "b = b + 10"

// Pero es mas consiso y facil de leer de esta forma "b += 20"
// ----------------


// Se puede sumar cualquier cantidad utilizando esta sitaxis no necesariamente debe ser un numero entero
var totalVentas = 13567.34;
console.log(totalVentas);
totalVentas += 345.67;
console.log(totalVentas);
// ------------------------------------------------------



// TEMA 16: Asignación de Resta

// Asi como podemos incremantar el valor de una variable en otro valor especifico podemos reducir el valor de una variable
var b = 23;
b = b - 3;
console.log(b);

// forma mas consisa
b -= 9;
console.log(b);
// ----------------

// OTRO EJEMPLO
var totalDeuda = 2446;
totalDeuda -= 345;
console.log(totalDeuda);
// ------------------------------------------------------



// TEMA 17: Asignacion de Multiplicacion

// Podemos utilizar la misma sintaxis de asignacion compuesta para realizar tambien una MULTIPLICACION, con el valor actual de una variable
var c = 23;
c = c * 2;
console.log(c);

// OTRA FORMA
var c = 2;
c *= 2;
console.log(c);

// OTRO
var salario = 45000;
console.log(salario);
salario *= 5;
console.log(salario);
// ------------------------------------------------------



// TEMA 18: Asignacion de División

// se cubren las 4 operaciones principales que podemos realizar con asignacion compuesta, veremos en este caso la División
var d = 39;

d = d / 3;
console.log(d);

// OTRO
d /= 2;
console.log(d);


// OTRO EJEMPLO
var salario = 45000;

console.log(salario);
salario /= 2;
console.log(salario);


// Con esto ya sabemos como realizar las 4 operaciones que sabemos usar con la asignacion compuesta.
// ------------------------------------------------------











// ----------------
// ----------------
// ----------------




// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------