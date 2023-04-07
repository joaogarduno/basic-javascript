

// 
// Tema 91: Ciclo While

// ya sabemos como trabajar con objetos en JavaScript ya que es un tema muy importante, pero vamos a pasar a otro aspecto del lenguaje de programacion que nos va a permitir escribir programas muy poderosos, mucho mas poderosos de los que hemos escrito hasta ahora, y estos son los ciclos o bucles.

// Los ciclos o bucles nos permiten repetir, una secuencia de instrucciones un numero especifico de veces tenemos 2 tipos de ciclos:

// Ciclos o bucles "while" y ciclos o bucles "for"

// En español traducimos el termino a ciclo o bucle se usan de forma equivalente en ingles el termino original se denomina "loop"

// CICLO WHILE
// Los ciclos "while" se usan cuando no tenemos un numero especifico de iteraciones.

// ¿QUÉ ES UNA ITERACION?
// Una iteracion es una repeticion del bloque de codigo que queremos repetir, cuando no sabemos el numero especifico de iteraciones que queremos realizar, pero si sabemos que es lo que tiene que ser cierto para continuar el proceso usamos un ciclo "while"

// ¿Cómo mostrariamos un mensaje 3, 4 o 5 o 6 veces en la consola?, por ejemplo el siguiente mensaje hola "mundo", y lo que realmente hariamos es escribir solo "console.log("Hola , Mundo") repitiendolo tantas vaces sea necesario o las veces que quieres mostrar el mensaje, pero nos daremos cuenta que eso no es practico, ya que si quisieramos repetir el mensajae 20 veces tendriamos que tener 20 líneas de "console.log("Hola, mundo"), algo tan sencillo como esto hacer un tarea repetitiva no nos deberia tomar tantas lineaas de codigo y sera que nuestro codigo sea imposible de leer e ineficiente para escribir, imagina aquellos programas mas complejos que controlan funciones muchisimo mas complejas, para eso, para evitarnos tanto problema de repetir codigo tenemos los cilos "while", nos permiten ese codigo simplemente con una estructura especifica y repetirlo

// Recordar que los ciclos while nos permiten escribir ese codigo simplemente con una estructura especifica y repetirlo

// definimos una variable

var i = 0;

//  tenemos que escribir la condicion que tiene que ser verdadera para poder continuar
while(i <= 200){
    console.log('perrito');
    i++;
}

// Gracias a los cilos podemos escribiir programas mucho mas poderosos
// ----------------





// OTRO EJEMPLO:

// CICLO WHILE
var miArreglo = [];
var i = 0;

console.log(miArreglo);

// Queremos agregar los numeros entre 0 y 9 a este arreglo, ¿Cómo lo podemos hacer? lo podemos hacer con un ciclo "while"
while(i <= 10){
    // ¿Qué queremos hacer?, lo que intentamos hacer es agregar ese valor al arreglo
    miArreglo.push(i);
    i++;

}

console.log(miArreglo);
// ----------------





// OTRO EJEMPLO:

// 

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

// USamos un ciclo "while " para quitarle cierte numeros de ese arreglo, en la condicion podemos usar, la loguitud o el tamaño del arreglo
while(numeros.length > 4){
    numeros.pop();
}

console.log(numeros);
// con este console.log podemos ver que lo unica que nos imprime es hasta ese numero de longitud con el metodo "pop()"

// Esto es solo una introduccion ciclo while en JavaScript, y es muy importante recordar actualizar las variables, para que la condicion en algun momento sea falsa, si esta condicion nunca es falsa el proceso en teoria nunca se va a detener
// ------------------------------------------------------------------








// Tema 92: CICLO For

// Ahora veremos el ciclo o bucle "for" en JavaScript y veremos como funciona.

// usamos el ciclo "for" cuando sabemos cuantas iteraciones van a ser necesarias y el ciclo "for" nos actualiza esa variable que antes teniamos que actualizarla nosotros mismo, con el ciclo "while" la actualiza automaticamente.

// Vamos hacer algo que es equivalente a lo que hicimos con el ciclo "while", agregar los numeros del 0 hasta el 9 a un arreglo, pero con el cliclo "for", la forma de escribir codigo es una forma un poco diferente

var miArreglo = [];

// inicializar una variable, a esto se le llama la "vaariable del ciclo" en ingles "loop variable", es decir, "la variable del ciclo" esta variable es la que va a decidir si se sigue ejecuando o no
// Despues tenemos la condicion que decide que mientras i sea < menor que 10 el ciclo va a continuar
// depues tenemos que decirle a JavaScript como queremos actualizar esa variable en cada iteracion, por ejemplo si queremos incrementar el valor de i en 1, escribimos i++, entonces eso es lo que basicamente se tiene aqui en el ciclo "for"
for(var i = 0; i < 10; i++){
    // vamos añadir el valor de I al arreglo
    miArreglo.push(i);
}

console.log(miArreglo);
// Entonces esto es semejante al ejemplo anterior con el ciclo "while", pero la ventaja que tienen los ciclo "for" es que podemos especificar todas las condiciones importantes para el ciclo, tenemos el valor inicial de la variable del ciclo, tenemos la condicion y tiene que ser verdadera para que el ciclo continue ejecutandose y tambien tenemos aqui lo que queremos hacer con esa variable cada ves quecomience la iteracion o cada vez que temine una iteracion que es iquivalente.
// ----------------






// OTRO EJEMPLO

// En este caso queremos incrementar el  valor de i en 1 pero no necesariamente tenemos que incrementar ese valor de uno en un uno, se puede incrementar en otro valor, en ese caso se tendria que hacer de la siguiente manera:
var miArreglo = [];

for (var i = 0; i < 10; i = i + 2){
    miArreglo.push(i);
}

console.log(miArreglo);

// Tambien podemos utilizar el operador de incremento de la siguiente manera "i += 2", es decir...
// for (var i = 0; i < 10; i += 2){}
// ------------------------------------------------------------------





// TEMA 93: Ciclos "for": Numeros impares

// declaramos el arreglo en JavaScript ya que vamos a guardar los numero  impares en ese arreglo, vamos a tener los impares entre 1 y 19, pero, ¿Cómo lo podemos hacer con un ciclo FOR?
var miArreglo = [];

for(var i = 1; i < 50; i += 2){
    miArreglo.push(i);
}

console.log(miArreglo);
// Este ciclo nos muestra los numeros impares

// Con estos ciclos nos permite realizar operaciones mas complejas sin escribir mas lineas de codigo
// Tambien podemos realizar procesos mas eficientes
// ----------------




// OTRO EJEMPLO

// Numeros pares
let otroArreglo = [];

for(var i = 2; i <= 30; i += 2){
    otroArreglo.push(i);
}

console.log(otroArreglo);
// ------------------------------------------------------------------



// // TEMA 94: Ciclos "for": Contar Hacia Atras

// Tambien podemos contar hacia atras con un cilo o bucle "for".

// Hasta ahora hem,os incrementado el valor de "i" que es la variable del ciclo, pero ahora tambien podemos reducir su valor, veamos como podemos hacerlo.
for(var i = 15; i >= 10; i--){
  console.log(i);
}


// Tambien podemos reducir de 2 en 2
for(var i = 15; i >= 10; i-=2){
  console.log(i);
}
// Si nos damos cuenta vemos que podemos modificar el valor de "i" como queramos, ya que incluso se pude multiplicar  por 2 o dividirlo entre 2
// ----------------




// OTRO EJEMPLO:

// Vamos a ver un ejemplo con el arreglo 
// A este arreglo le vamos a incluir ciertos valores, pero ¿Qué tipo de valores?, el valor inicial de "i" sera "10" y queremos continuar el proceso mientras "i" sea mayor que 0
var miArreglo = [];

for(var i = 10; i > 0; i -= 2){
  miArreglo.push(i);
}

console.log(miArreglo);
// Se va reduciendo de 2 en 2
// ------------------------------------------------------------------





// TEMA 95: Iterar Sobre un Arreglo con un Ciclo "for"

// Tambien podemos utilizar los ciclos "for" para iterar sobre un arreglo.
// Iterar sobre un arreglo significa que vas a obtener cada uno de los elementos de ese arreglo y lo vas a poder utilizar en el cuerpo del ciclo, es decir vas a poder hacer algo con cada uno de los elementos de ese arreglo.

// En este caso vamos a sumar todos esos valores utilizando un ciclo y el total de la suma la vamos a acumular en la variable "total" que inicialmente tiene el valor de cero 0

// Definimos un arreglo que va a tener 4 valores (4, 6, 8, 2)
var miArreglo = [4, 6, 8, 2];
// Esto que haremos aqui se puede aplicar para cualquier tipo de dato o elemento, incluyendo objetos, cadena de caracteres, incluyendo arreglos anidados y cualquier otro tipo de dato

var total = 0;

// Para sumar todos los valores tenemos que ir acumulando esos valores en el total, para eso tenemos que acceder a cada uno de los valores en una iteracion del ciclo, vamos a necesitar 4 iteraciones porque exiten 4 elementos.

// inicialmente el valor de "i" sera cero "0" la variable del ciclo ya que vamos a utilizar la variable "i" como indice el indice del arreglo, recordar que los indices de los arreglos comienzan desde 0 y se incrementan en uno por ejemplo; 0, 1, 2, 3, 4, 5
for (var i = 0; i < miArreglo.length; i++){
    total += miArreglo[i];
}
// Vamos a sumar todos esos valore sutilizando un ciclo.
// ¿Pero, cual será la condicion para que el proceso siga? mientras el valor de "i" sea estrictamente menor que la longuitud  o el tamaño del arreglo, es decir mientras "i" sea un indice valido porque es menor que la longitud del arreglo.

// Y continuando con el proceso incrementamos el valor de "i" con "i++" en 1 antes de la proxima iteracion.
// Pero porque hacemos uso de un operador estricto de comparacion estricta y no puede ser igual al tamaño del arreglo porque estamos comenzando a contar desde cero, recordar que los indices comienzan desde cero, entonces el ultimo indice sera la longitud del arreglo -1, ese es el ultimo indice valido para ese arreglo, es por eso que utilizamos ese valor estricto del operador "<"



// mostramos el total desde la consola cuando termine el proceso.
console.log(total);
// ----------------





// OTRO EJEMPLO:
// iterar sobre un arreglo.

// Digamos que tenemos un arreglo de cadena de caracteres, que representan lenguajes de programación
var lenguajes = ['JavaScript', 'PHP', 'Python', 'Java', 'C++', 'C#'];

// Digamos que queremos mostrar cada una de esas cadenas en mayuscula, queremos combertir todos sus caracteres en mayuscula, entonces lo que podemos hacer es iterar sobre el arreglo porque queremos hacer algo con cada uno de estos elementos
for (var i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i].toUpperCase());

}
// ----------------





// OTRO EJEMPLO

// En este caso vamos a trabajar con un ciclo "for" dentro de una funcion
// Definimos una funcion que va a contar la cantidad de numeros pares en un arreglo
function contarNumerosPares(arreglo){
    var total = 0;

    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 == 0){
            total++ // Incrementamos el total en uno
        }
    }

    return total;
}

console.log(contarNumerosPares([5, 3, 1, 7, 9])); // Numeros impares como resultado seria: 0 (cero) numeros pares
console.log(contarNumerosPares([1, 3, 5, 7, 9, 2, 4])); // numeros pares e impares, resultado: 2 numeros pares
console.log(contarNumerosPares([2, 4, 6, 8, 10])); // numeros pares, resultado: 5 numeros pares

// vemos varios ejemplos de como poder trabajar con un ciclo "for" para iterar sobre los elementos de un arreglo.
// ------------------------------------------------------------------







// TEMA 96: Ciclos "for" anidados

// es muy util escribir ciclos dentro de otros ciclos, eso es lo que se conoce como ciclos anidados.
// Vamos a ver un ejemplo de un ciclo for anidado, tendremos un ciclo "for" dentro de otro ciclo "for".
// son muy utiles para procesar estructuras de datos multidimensionales.

// Por ejemplo digamos que tenemos un arreglo y ese arreglo contiene otros arreglos
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Ahora, como podemos hacer alguna operacion con cada uno de los elementos de cada uno de los arreglos si nosotros usamos un ciclo "for" para iterar sobre los elementos de este arreglo, veamos que obtenemos

// FOR PRINCIPAL
for (i = 0; i < miArreglo.length; i++) {
  // Console solo para hacer pruebas estos 3 "console":
  // console.log(miArreglo[i]);
  console.log('> Nueva Iteración');
  // console.log('Arreglo: ');
  
  // esto es util cuando queremos trabajar con un arreglo anidado.
  // pero que pasa si queremos trabajar con los elementos de ese arreglo anidado, algo que podriamos hacer es asignar ese arreglo anidado a una variable.
  var arregloAnidado = miArreglo[i]; // Arreglo
  console.log('Arreglo: ' + arregloAnidado);
  
  // FOR ANIDADO
  // y luego podemos iterar sobre los elementos y luego podemos escribir otro ciclo "for" para iterar sobre ese arreglo anidado.
  for (var x = 0; x < miArreglo.length; x++) {
    // Cuando usas ciclos anidados es mejor usar variables con nombres distintos para el ciclo anidado y evitar cambios inesperados en la variable del ciclo, en este caso estamos ocupando "X", pero esta vez solo queremos iterar sobre el arreglo anidado.
    console.log(arregloAnidado[x]); // Elemento
    // "Console" solo para hacer pruebas estos 3 "console":
    console.log('>>> Ciclo anidado:');
    console.log('Elemento:')
    }
}
// Estos son los ciclos anidados, para poder obtener este conocimiento se requiere de practica y entender como funciona este tipo de ciclo, los ciclos anidados










// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------