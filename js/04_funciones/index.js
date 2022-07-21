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
// ------------------------------------------------------------------




// TEMA 47: Ámbito Global vs. Ámbito Local

// ¿Que sucede cuando tenemos una variable global y una variable local con el mismo nombre?
// Conoceremos el valor que se utiliza al final.

var miNombre = 'Miles';

function mostrarMiNombre(){
    // Vamos a definir una variable local
    var miNombre = 'Daysi';
    // Notaremos que es el mismo nombre de la variable GLOBAL (la anterior, la que esta fuera de la funcion) usando la palabra reservada VAR que nos permite declarar una variable nueva.

    console.log(miNombre);
    // Pasara algo muy peculiar cuando queramos verificar el valor de la variable "miNombre"
}
// Analicemos... ¿Que es lo mas logico que suceda si tenemos una varible GLOBAL con este valor "Miles" y la variable LOCAL con el valor "Daysi"?
// ¿Qué valor crees que se muestre cuando lo veamos en consola?


// Primero: Veremos lo que sucede llamando a la funcion
mostrarMiNombre();
// El resultado o el valor que nos muestra es "Daysi"

// ¿Por qué? porque la variable local tiene mayor prioridad.

// Cundo tenemos una variable GLOBAL y una variable LOCAL, la local tiene prioridad dentro de la funcion
// ----------------



// OTRO EJEMPLO:

// Pero tambien que sucede cuando tratamos de mostrar el valor de "miNombre" fuera de la funcion

var miNombre = 'Miles'; // Recordar que tenemos una variable GLOBAL, y esta variable GLOBAL si se puede usar en cualquier lugar del programa en cualquier linea

function mostrarMiNombre(){
    var miNombre = 'Daysi'; // Recordar que esta es una variable local de la funcion
    // Es decir solo existe solo dentro de esta funcion llamada "mostrarMinombre()" y no se puede usar en ningun otro lugar del programa

    console.log(miNombre);
}

mostrarMiNombre();

console.log(miNombre); // se agrega este "console.log()"

// Ahora si lo mostramos en consola veremos que tenemos lo siguiente
// --> Daysi
    // Daysi por que estamos utilizando la funcion, entonces dentro de la funcion se usa la variable local.

// --> Miles
    // Y aqui se utiliza la variable GLOBAL, por que estamos usando el valor de la variable global.
    // Esa variable Global el unico lugar donde no se va a poder ver ese valor es dentro de la funcion porque hay otra variable local con el mismo nombre.
    // Pero en el ambiente GLOBAL no hay otra mas que "miNombre" llamandola de esta manera "console.log(miNombre);"

// Es por esto que vemos este comportamiento en nuestro codigo.
// ------------------------------------------------------------------




// TEMA 48: Retornar un Valor

// Las funciones pueden retornar un valor ademas de recibir valores.

// Recuerda que hablamos de las funciones y deciamos que forman como las variables cajitas o un ambiente interno y propio en el programa, en donde puede tener:
    // Sus propias variables
// Y tiene una conexion con el programa principal, pero tambien tiene propiedades especiales.
// Esas propiedades especiales tambien le permite tomar valores y tambien le permite retornar valores, para poder interactuar con el programa principal.

// esto es distinto a cuando mostramos el valor en consola, esta vez retornaremos el valor, entonces veremos a que nos referimos con retornar.

// Vamos a crear una funcion llamada "sumar" que va a tomar 2 parametros "a" y "b", los 2 numero que se van a estar sumando
function sumar(a, b){
    // Antes para poder ver el resultado de nuestra operacion o la accion que teniamos que hacer colocabamos "console.log(), que nos permitia mostrar el valor en consola".

    // Pero para retornar ese valor, tenemos que escribir una palabra reservada llamada "return", esa palabra nos va a permitir que la funcion retorne un valor cuando se ejecute esa linea, nosotros que valor vamos a retornar de la funcion... vamos a retornar la suma de "a" y "b"
    return a + b;
}

// ahora si nosotros llamamos a la funcion, esta vez nota que nosotros estamos escribiendo "return" y no "console.log()" dentro de la funcion.

// Entonces este resultado no se va a ver en consola si llamamos directamente a la funcion, para mostrar ese valor retornado tenemos que usar.
console.log(sumar(9, 8));
// ------------------------------------------------------------------




// TEMA 49: undefined

// Asi como podemos retornar un valor especifico de una funcion, escribiendolo esplicitamente con "return", tambien podemos omitir esa sentencia
// Podemos no retornar ningun valor de la funcion, pero en ese caso hay algo muy curioso que debes saber, la funcion, aun asi va retornar un valor por defecto, y ese valor sera "undefined"

// Ejemplo:
function sumar(a, b){
    // En lugar de retornar el valor de la suma, lo vamos a mostrar en consola
    // Es muy distinto mostrar un valor en la consola que retornarlo
    console.log(a + b);

    // Nosotros no estamos escribiendo esto:
    // return a + b;

    // Si no que solamente lo estamos mostrando en consola
}

// Como no estamos retornando ningun valor explicitamente, veremos que es lo que ocurre.

// Antes cuando retornavamos un valor, podiamos mostrar el valor retornado en la consola con "console.log()", por ejemplo:
console.log(sumar(10, 5));
// Si llamabamos a la funcion con 2 valores (como en el console.log() anterior) el resultado seria 15 si hubieramos retornado la "suma" y ese valor se hubiera mostrado en consola.

// Pero ahora veamos que ocurre ahora que no tenemos una sentencia "return", y los valores que se muestran son los siguientes:
    // --> 15
    // --> undefined

// Entonces la funcion se ejecuta, llamamos a la funcion, se muestra el valor de la suma que es 15 y luego el valor retornado por esa llamada a la funcion se muestra en la consola y ese valor es "undefined".
// ----------------



// OTRO EJEMPLO

// Ahora si anteriormente hubieramos colocado un "return" en nuestra funcion tendriamos nuestro resultado en consola que seria 15 es decir...
function sumar(a, b){
    return a + b;
}
console.log(sumar(20, 10));
// Y el resultado en consola solo nos muestra el resultado no nos muestra el "undefined"
// ----------------



// Pero nosotros solamente estamos mostrando el resultado con el primer ejemplo en la consola.

// Y el valor que se esta regresando a diferencia de este segundo ejemplo, es que en el primer ejemplo el valor que se esta retornando es el total de la suma y ademas un valor "undefined"

// Entonces es importante que sepamos que las funciones regresan un valor, pero ese valor es "undefined"
// ------------------------------------------------------------------




// TEMA 50: Asignar un Valor Retornado

// Cuando una funcion retorna un valor, podemos asignar ese valor retornado a una variable.

// Esto es muy util cuando queremos usar ese valor mas tarde en nuestro programa, porque podemos guardarlo

// ejemplo

// Seguimos con la funcion "sumar" con 2 parametros que retornan la suma
function sumar(a, b){
    return a + b;
}

// Ahora digamos que queremos llamar a la funcions "sumar" y le vamos a pasar 2 valores como argumentos
sumar(5, 4);
// Si ejecutamos esta funcion notaremos que nos devuelve algo vacio, es decir no se muestra nada.

// Veamos el siguiente ejemplo para saber que hacer cuando no se muestra el valor de la funcion ejecutada.
// ----------------




// ¿Por qué? porque no estamos motrando el resultado en ningun lado y tampoco lo estamos asigando a ninguna variable, es decir no estamos haciendo nada con ese valor.
// Y luego que la llamada a la funcion termine el valor se pierde, no lo podemos usar mas, pero... para evitar eso y si queremos guardar ese valor lo que tenemos que hacer es asignarlo a una variable.
function sumar(a, b){
    return a + b;
}

var resultado = sumar(5, 5);
// Es exactamente igual a como cuando asignamos un valor a una variable.
// Asi es como podemos asignar el valor retornado a una variable

// Y luego puedes usar el valor donde lo necesites en este caso en la consola estamos mostrando el valor asignado a esa variable
console.log(resultado);
// ----------------



// OTRO EJEMPLO

// Podemos ver otro ejemplo...
// Podemos definir una funcion que retorne una cadena de caracteres con nuestra meta.

// ¿Pero cual va a ser nuestra meta?
// Vamos a retornar una cadena de caracteres que diga "Esto de las funciones en Javascript"
function crearCadenaConMeta(lenguajeDeProgramacion){
    return 'Estoy aprendiendo algo de las funciones en...' + lenguajeDeProgramacion;
    // Se concatenan estas 2 cadenas, y la cadena resultante va a ser retornado
}

// Ahora llamamos a la funcion y asignamos el valor retornando una variable, veamos que pasa
crearCadenaConMeta('JavaScript');
// Entonces vamos a pasar la cadena de caracteres 'JavaScript', esto quiere decir que en la cadena donde colocamos "lenguajeDeProgramacion" y ademas parametro, va a tener el valor de "JavaScript", cuando llamemos a la funcion.

// Pero....
// Si nos damos cuenta que si ejecutamos el codigo anterior notaremos que no se mostrara nada, nos da como resultado algo "vacio"
// Entonces lo que podemos hacer es asignar ese resultado a una variable
var miMeta = crearCadenaConMeta('JavaScript');

// Y luego podemos hacer lo que vayamos a necesitar para poder ejecutar esa cadena a traves de una variable, en este caso mostrarlo por consola
console.log(miMeta);

// Entonces ya sabemos como asignar el valor retornado a una variable
// ------------------------------------------------------------------




// TEMA 51 - PROYECTO 3: Permanece en Fila -> Funciones

// PROYECTO 3

// Ahora que sabemos como trabajar con funciones en Javascript, vamos a aplicar nuestro conocimiento para implementar lo que conocermos como una "COLA", vamos hacer una variacion de una cola que en ingles se conoce como "queue", entonces es una estructura de datos que nos va a permitir agregar elementos a una fila.

/*

PROXIMO EN FILA

En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

ACTIVIDAD:
Define una funcion llamada "proximoEnLaFila" que tome un arreglo (arreglo) y un numero (elemento) como argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion "proximoEnLaFila" debe retornar el elemento que fue removido.

*/


function proximoEnLaFila(arreglo, elemento){
    // Que es lo primero que queremos hacer cuando llamamos a la funcion para agregar un elemento a la fila, agregarla al final del arreglo
    arreglo.push(elemento); // Metodo que agrega un elemento al final de una arreglo

    // Luego de que lo agregamos al final del arreglo tambien debemos eliminar el primer elemento del arreglo, es decir debemos eliminar el primer elemento.

    // arreglo.shift();    // es el metodo que va a eliminar el primer elemento del arreglo
    // Si nos fijamos no toma ningun argumento si solamente lo llamamos con parentesis vacios ()


    // nos falta la parte final que debe cumplir la funcion
    // La funcion debe retornar el elemento que fue removido, pero si notamos aun no hay una sentencia "return", ¿Como lo podemos retornar?
    // Recuerda que el metodo shift() tambien retorna ese elemento, cuando nosotros llamamos a este metodo, podemos asignarlo a una variable o tambien podemos retornarlo.
    return arreglo.shift()
    // Listo ya con eso vamos a remover el primer elemento que lo que acabamos de escribir "return arreglo.shift()" va ser reemplazado por ese elemento detras de escena y ese mismo elemento va ser retornado.
}

// Vamos a probar como funciona nuestra funcion.
// Si definimos una variable "miArreglo"
var miArreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ahora queremos ver el status de nuestro arreglo, es decir en que estado se encuentra nuestro arreglo antes y despues de llamar a la funcion
// ¿Y como podemos hacer eso en JavaScript?

// existe una funcion que es muy util para mostrar los arreglos en la consola que se llama "JSON.stringify()" y pasamos el arreglo.
// JSON.stringify() -> esto nos permite mostrar el arreglo de una forma mas presentable en la consola, es decir estamos convirtiendo el arreglo en una cadena de caracteres con un formato especifico y ademas que se esta concatenando a esta cadena.
console.log('Antes de: ' + JSON.stringify(miArreglo));


// Luego de esto, tambien vamos a mostrarlo despues de hacer el cambio y en el medio tenemos que hacer el cambio, vamos a mostrar el valor retornado tambien, es por eso que vamos a colocar un "console.log()"
// Llamamos a la funcion "proximoEnLaFila" y el primer argumento que toma es el "arreglo", pero, ¿Cual arreglo vamos a pasar como "argumento"? y pasamos como argumento "miArreglo".
// Ahora queremos mutar o cambiar este arreglo con los numeros 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Y luego de que tenemos ese arreglo queremos agregar un nuevo elemento y agregamos el elemento 6
// Segun las instrucciones el efecto de llamar esta funcion deberia ser que el primer elemento se va a eliminar del arreglo y se va agregar al final de ese arreglo el nuevo elemento.
// Entonces el elemento removido es 0 y ese es el elemento que se va a retornar que deberiamos ver en la consola 
console.log(proximoEnLaFila(miArreglo, 10));


console.log('Despues de: ' + JSON.stringify(miArreglo));

// Entonces ya implementamos una funcion que nos permite modificar nuestro arreglo como si fuese una fila o lo que llamamos en estructura de datos una "cola" que en ingles se denomina "queue"












// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------