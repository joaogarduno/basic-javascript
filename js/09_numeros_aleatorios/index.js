


// TEMA 99: NUMEROS ALEATORIOS

// Ahora vamos a ver como podemos generar un numero aleatorio en JavaScript, tenemos todas las herramientas que necesitamos para generar un numero aleatorio en JavaScript.

// Simplemente tenemos que usar la palabra "Math" que significa "Matematicas"

// Definiremos una funcion que se llamara "generarFraccionAleatoria" esta funcion no va a tomar argumentos si no que retornara un valor aleatorio,  ¿cómo vamos a generar ese valor? la clave es escribir "Math" con la "M" mayuscula (así como se ve dentro de la funcion).
// "Math" es un objeto que nos da funciones matematicas basicas y constantes una de esas funciones matematicas basicas que podemos usar es la funcion "random()".
// "random()" significa "aleatorio" en español y esta funcion "random()" no toma ningun parametro, es decir no necesita "argumentos" para retornar un valor aleatorio.
// El metodo retorna un "valor" aleatorio entre 0 y 1, pero el 1 no esta incluido en los posibles resultados, asi que en notacion matematicas tendriamos algo asi [0, ] pero el 1 no estaria incluido en el resultado, el 0 si estaria incluido en los posibles resultado.
// Asi que para generar un rango tendremos que hacer algo especifico ya que el numero 1 no va estar incluido ahi
function generarFraccionAleatoria(){
  return Math.random()
}

// Probamos nuestra funcion
console.log(generarFraccionAleatoria());
// Como resultado es un numero aleatorio con muchos decimales esos numero aleatorios van a ser muy utiles para genera numeros aleatorios en un rango especifico por ejemplo si necesitamos numero entre 3 y 5, o 10 y 15 vamos a poder hacerlo, en base a estos valores que los vamos a tener que transformar un poco, pero nunca ninguno de estos resultados va ser 1, asi que tratemos de recordar que entre 0 y 1 pero nunca pueden ser 1 exactamente.
// ----------------




// OTRO EJEMPLO

// Ahora, no necesariamente llamar a "Math.random()" dentro de una funcion, tambien en este caso lo hicimos para definir la funcion que podriamos llamar.
// Pero... tambien podemos llamarlo simplemente en nuestro programa donde necesitemos ese valor aleatorio o podemos asignar el valor a una variable.

console.log(Math.random());
// ----------------




// OTRO EJEMPLO

// Y tambien podemo asignarlo a una variable, por ejemplo
var numeroAleatorio = Math.random();
// Esto generara un valor y este valor sera asignado a una variable y luego si mostramos el valor de esa variable en la consola podemos ver el resultado
console.log(numeroAleatorio);
// ------------------------------------------------------------------





// TEMA 100: NUMEROS ENTEROS ALEATORIOS

// Lo proximo que veremos es ¿cómo generar numero aleatorios enteros en javaScript?

// Asi como puedes generar numeros decimales aleatorios en JavaScript tambien podemos escribir una expresion que nos permita convertir esos numeros decimales a numeros enteros dentro de un rango especifico.

// Veremos como podemos obtener un numero aleatorio entre 0 y 19

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

// "Math" es un objeto que nos permite usar las funciones y constantes matematicas escenciales.
// Una de esas funciones represantadas como un metodo es "floor()".
// "floor()" lo que hace es retornar el mayor numero entero que es menor o igual a su argumento numerico al numero que pasamos entre parentesis.
// Lo que hace basicamente "floor()" es truncar la parte decimal, lo que hace basicamente es tomar la parte entera de lo que esta entre parentesis, entre parentisis tenemos que generar ese numero aleatorio "Math.random()", recuerda que ese numero aleatorio sera entre 0 y 1.

// 0 cero puede ser uno de esos valores pero 1 nunca va a ser uno de esos valores no incluye al valor uno, com podemos tranformar ese valor en un entero para obtener el rango que tenemos hay que multiplicarlo por un entero 20

// Analisaremos la logica de aqui:
// Este valor (Math.random() ) ---> sera un decimal es decir va a ser un valor entre 0 y 1 sin incluir 1 como no puede ser 1 este producto nunca va ser un 20 sera 19. y algo, es decir nunca sera 20 exactamente y como estamos aplicando la funcion "floor()" ese numero va a ser truncado a 19 si es 19. y algo  el resultado va ser 19 lo que se va asignar a esta variable.

// ahi ya tenemos un limite superior para el rango de valores que podemos obtener y el valor de "Math.random()" puede ser 0 es el minimo valor que puede tener, asi que 0 * 20 seria 0, y cuando le aplicamos "floor" el resultado seria cero 0 y el valor de la variable seria 0, asi que estamos obteniendo un rango de valores que va desde 0 hasta 19 inclusivo y es exactamente lo que necesitavamos.

// Si mostramos este numero aleatorio en la consola
console.log(numeroAleatorioEntre0y19);
// El resultado de esto en nuestro caso fue 11 el numero aleatorio que se genero, probablemente el resultado haya sido 11. y algo pero como tenemos el metodo "floor()" hizo que redondeara o lo trunco, es decir trunco los decimales al numero 11 solo toma la parte ENTERA.
// ----------------



// OTRO EJEMPLO:

// Ahora vamos hacer algo interesante que puedes usar en tus programas, vamos a definir una funcion que genere un numero entero aleatorio.
// Esa funcion solo tendra un solo parametro, "el limite superior" del rango de numeros que queremos generar.
function generarEnteroAleatorio(limiteSuperior){
  // generar un entero aleatorio entre 0 y el limite superior sin incluirlo.
  return Math.floor(Math.random() * limiteSuperior);
}

// Vamos a retornar el valor y vamos aplicar el metodo "floor"
// Vamos a generar un numero aleatorio entre 0 y 1 sin incluir 1, pero esta ves en lugar de multiplicar por 20 que era un numero fijo, es decir un numero que no podiamos cambiar, vamos a reemplazarlo para que podamos multiplicarlo por el valor del parametro que es "el limite superior"
// Entonces esto nos esta permitiendo generar valores ENTEROS entre 0 y el limite superior sin incluirlo

console.log(generarEnteroAleatorio(5));
// Si la llamamos con un valor digamos 5 vamos a poder generar un valor aleatorio es decir un nunero entero aleatorio entre 0 y 5.
// siempre sera entero el resultado porque estamos usando el metodo "floor"

// Lo mostramos 5 veces aleatorios.
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
// El valor 0 es una de las posibles opciones que podemos obtener pero 5 no es una de las posibilidades y no lo vemos entre las opciones que nos imprime la consola, pero estas opciones fueron generadas aleatoriamente.
// ----------------



// OTRO EJEMPLO:

// Ahora si lo que queremos es generar muchos numeros aleatorios, podemos hacerlo con un ciclo
function generarEnteroAleatorio(limiteSuperior){
  return Math.floor(Math.random() * limiteSuperior);
}

//  vamos a escribir un ciclo para repetir el proceso de mostrar el resultado en consola y de generar un numero aleatorio
for(i = 0; i < 15; i++){
  console.log(generarEnteroAleatorio(5));
}
// Asi podemos ver el resultado y notamos que todos los numeros enteros estan en el rango de 0 hasta 4 inclusive, en ningun lado vemos el numero 5.

// Bien ahora ya sabemos como generar un numero aleatorio en JavaScript desde 0 hasta un limite superior.
// ------------------------------------------------------------------





// Tema 101:  NUMEROS ENTEROS ALEATORIOS

// NOTA: se repite el tema el 100 y el 101 es el mismo tema (se hizo para probar si los comentarios o la informacion o las notas tienen el mismo sentido y cual es el que explica mejor).


// Así como puedes generar numeros decimales aleatorios en javascript, tambien podemos escribir una expresión que nos permitar convertir esos numeros decimales a numeros enteros dentro de un rango especifico

// Vamos a ver como podemos obtener un numero aleatorio entre 0 y 19

// Lo que tenemos que escribir es "Math.floor();" esto ahara toda la magia de la expresión

// "Math." --> -> Sabemos que es un objeto, ese objeto nos permite usar funciones y constantes y matematicas escenciales una de esas funcionaes representada como un metodo es "floor".

// "floor()" --> lo que hace es retornar el mayor numero entero que es menor o igual a su argumento numerico al numero que pasamos entre parentesis ()
// Y lo que hace es basicamente truncar la parte decimal, basicamente lo que hace es tomar la parte entera de lo que esta entre parensis, entre parentesis tenemos que generar ese numero aleatorio.

// (Math.random()) --> Recuerda que ese numero aleatorio va a estar entre 0 y 1, cero puede ser uno de esos valores, pero uno nunca va a poder ser uno de esos valores no incluye al valor 1.

// Ahora como podemos transformar ese valor en un entero para obtener el rango que queremos lo multiplicamos por un entero

let numAlet = Math.floor(Math.random() * 20);

// Math.floor(Math.random() * 20);

// "Math.random()" --> este valore sera un decimal, entre 0 y 1, sin incluir 1, como no puede ser 1 este producto nunca sera 20 sera 19. ... y algo nunca 20 exactamente y como se aplica la funcion "floor()" ese numero sera truncado a 19 si es 19. y algo el resultado sera 19.

// De esta manera estamos generando un limite superior para el rango de valores que podemos obtener y el valor de "Math.random()" puede ser 0 es el minimo valor que puede tener asi que cero por 20 seria 0 y cuando aplicamos floor el resultado seria 0 y el valor aqui seria 0.

// asi que estamos obteniendo un rango de valores que va desde 0 hasta 19 (incluyendo el 19 ya que el tope es 20) y eso es lo que necesitamos.

console.log(numAlet);
// Si mostramos este numero aleatorio en la consola podemos verlo.
// Ahora el resultado que nos muestra nos damos cuenta que es entero pero en realidad el valor que nos esta mostrando es por ejemplo 8. y algo pero el metodo "floor()" lo redondeo o lo trunco, es decir trunco los decimales a un numero entero.



// ----------------
// OTRO EJEMPLO

// Vamos a definir una funcion que genere un numero entero aleatorio, esa funcion tendra un solo "parametro" sera el limite superior del rango de numeros que queremos generar y vamos a escribir la expresion que teniamos antes de forma general, retornaremos el valor y vamos a aplicar el metodo "floor()" y dentro generaremos un numero aleatorio entre cero y 1 sin incluir 1, pero esta vez en ves de multiplicar por 20 que es un numero fijo, que es un numero que no podiamos cambiar (ya que era el tope de numero) vamos a multiplicarlo el valor del parametro que es el "limite superior"

function generarEnteroAleatorio(limiteNumerico){

  // Generando un entero aleatorio entre 0 y el límite superior (sin incluirlo)
  return Math.floor(Math.random() * limiteNumerico)
}
// Entonces esto nos esta permitiendo generar valores "enteros" entre 0 y el limite superior sin incluirlo

console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
// Estas opciones fueron generadas aleatoriamente



// OTRO EJEMPLO

// Si queremos intentar generar muchos numeros aleatorios podemos hacerlo con un ciclo

function generarEnteroAleatorio(limiteNumerico){

  return Math.floor(Math.random() * limiteNumerico)
}

// Escribimos un ciclo para repetir el proceso de generar un numero aleatorio, en este caso seran 15 veces es decir 15 numeros aleatorios
for(let i = 0; i < 15; i++){

  // Ejecutaremos este código 15 veces, es decir esta línea se ejecutara 15 veces
  console.log(generarEnteroAleatorio(5));
}
// En ningun lado vemos el valor de 5
// Así generamos un entero aleatorio en JavaScript desde 0 hasta un límite superior.

// Támbien hay una forma de generar numeros enteros aleatorios en un rango especifico, con un limite inferior y un limite superior.
// ------------------------------------------------------------------





// TEMA 102: NUMEROS ENTEROS ALEATORIOS EN UN RANGO

// Anteriormente estabamos en parte limitados a generar un numero entero entre 0 y un limite superior, pero tambien podemos generar numeros enteros aleatorios en un rango especifico con un limite inferior y un limite superior, es decir entre 5 y 15, entre 20 y 50, entre cualquier rango que queramos especificar claro hablando de numeros enteros.

// Para eso tenemos que definir una función, esa funcion se llamara "rangoAleatorio" y contendra 2 parametros limiteInferior y limiteSuperior para obtener un numero en ese rango aleatorio, es decir un entero, vamos a tener que escribir una expresión parecida a la anterior pero con ciertos cambios.

// Primero seguimos ocupando "floor()" ese lo vamos a volver a usar.
// Tambien tenemos que generar un numero aleatorio entre 0 y 1 pero en este caso en lugar solo de multiplicar por el limite superior lo vamos a tener que multiplicar por una expresion un poco mas compleja.

// Esa expresion es el "limiteSuperior - limiteInferior + 1" y luego a ese resultado (luego de haber redondeado ese resultado) se le suma el "limiteInferior" y esa es la expresion que nos permite generar un entero en ese rango.

function rangoAleatorio(limiteInferior, limiteSuperior){
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

// Seguimos usando el metodo << floor() >> y seguimos utilizando el metodo << random() >> pero, ahora estamos multiplicando:

// Este valor: << * (limiteSuperior - limiteInferior + 1) >> el limite superior menos el limite inferior eso nos da como resultado el tamaño del intervalo mas 1 porque queremos incluir el limite inferior.

// Y luego a ese valor que se genera le sumaremos el limite inferior

// Eso nos retornara un entero en ese rango


for (i = 0; i < 10; i++){

  console.log(rangoAleatorio(10, 20));
}

// En este caso vamos a ver que el límite superior si se incluye en los posibles resultados
// ------------------------------------------------------------------





// TEMA 103: Función parseInt()

// En JavaScript podemos usar una funcion especifica que nos ofrece el lenguaje para convertir una cadena de caracteres que representa un numero en un numero porque recuerda que:
// Esto --> "5" no es igual a esto --> 5 en un lenguaje de programación

// El primer elemento que vemos "5" es el tipo de dato "string" o "cadena de caracteres".
// Y este elemento --> 5 es un numero Entero.

// Ahora, lo que haremos es como podemos convertir una cadena de caracteres que representa un número como en el ejemplo anterior es un numero "5" (cinco), pero ahora como lo podemos convertir al tipo de dato entero para poder trabajar y operar ese valor en nuestro programa.

// Ejemplo:
console.log(parseInt())

// Parse significa como convertir o procesar un entero.
// Esta funcion lo que hace es convertir una cadena de caracteres a un entero, es lo que nos dice la documentacion "Convertir una cadena de caracteres a un entero" y esa cadena de caracteres sera que vamos a pasar entre parentesis, la cadena de caracteres es 5

console.log(parseInt("5"))

// Tambien podemos convertir numero negativo a Entero
console.log(parseInt("-47"))

// Y lo bueno de esto es que podemos empezar a operar con estos valores si es lo que queremos en nuestro programa utilizando operaciones "aritmeticas" que normalmente usariamos con numeros tambien puedes convertir 0 de cadena de caracter a un entero.
console.log(parseInt("0"))

// y un numero decimal, pero en este caso el numero decimal se trunca, es decir, solo se convierte en numero o valor entero de ese numero eliminando la parte decimal, ejemplo "6.7" --> resultado: 6
console.log(parseInt("6.7"))
// NOTA: no se redondea, ya que en el caso que se redondeara tendriamos un valor de: 7, si no que solo se mantienen la parte Entera.

// El resultado es el mismo sin importar la parte decimal.
console.log(parseInt("6.2"))


// Tambien pudes usar esta función para convertir un numero decimal en un numero entero y funciona exactamente como queriamos, es decir, trunco la parte decimal, pero en este ejemplo si era un numero decimal no una cadena de caracteres
console.log(parseInt(6.7))

// Pero si tratamos de convertir un valor que en realidad no represente un numero vamos a tener un valor especifico, por ejemplo "abc";
console.log(parseInt("abc"))
// Esta cadena de caracteres no representa un numero y por lo tanto la funcion va a retornar "NaN" esto significa "Not a Number" significa que no es un numero valido y por lo tanto no se pudo convertir a un numero entero
// ----------------




// OTRO EJEMPLO

// Ahora, nosotros vamos a comprobar en la practica las ventajas de usar esta funcion, digamos que tenemos 2 variables y digamos que por alguna razón en nuestro programa esas variables tienen cadenas de caracteres asignados, pero en realidad queremos trabajar con enteros.

// por ejemplo si necesitamos sumar los valores que es lo que vamos a obtener, obtendremos una concatenacion o una union de esa cadena de caracteres que no es lo que queremos
let a = 8

let b = 4

console.log(a + b)


// Pero si esos valores fueran de tipo string
let x = "8"

let y = "4"

console.log(x + y)

// Obtendremos una "concatenacion" o una "union" de esas cadenas de caracteres que no es lo que queremos en ese caso lo que necesitamos hacer, es convertir las cadenas de caracteres a enteros.

let c = parseInt("8")
let d = parseInt("4")

console.log(c + d)
// Cuando llamamos a la función "parseInt()" el valor retornado sera un entero con todas sus propiedades

// Esta funcion llamada parseInt es muy importante en JavaScript y tambien la podemos usar con una pequeña variación especificando la base, esto lo veremos en el proximo tema.
// ------------------------------------------------------------------





// TEMA 104: Función parseInt() con una base

// Tambien puedes usar la funcion parseInt() de una forma mas poderosa porque puedes convertir una cadena de caracteres en otro sistema numerico al sistema decimal, como un entero.

// Ejemplo:
// mostramos el resultado con "console.log()" y llamamos a la funcion "parseInt()" pero en este caso pasaremos una cadena de caracteres con ceros y unos, ¿Cuál es el sistema numerico es ese ?, es el sistema numerico binario.

// Para eso para especificar que el sistema numerico de este numero es binario tendremos que pasar un segundo argumentocon el valor de 2 que representa la base de ese sistema es base 2
console.log(parseInt("110111", 2))
// Como resultado nos da un numero de 55
// Y es exactamente el equivalente de este numero binario en el sistema decimal.
// ----------------




// OTRO EJEMPLO:

// También podemos pasar el numero como un numero en JavasCript sin ser una cadena de caracteres necesariamente.
console.log(parseInt(110111, 2));
// En este caso solo escribimos el número binario y especificamos que la base de ese numero es 2 y tenemos el mismo resultado si lo tuvieramos como una cadena de caracteres.




// OTRO EJEMPLO:

// Veamos un ejemplo ahora con el sistema hexadecimal cuya base es 16.
console.log(parseInt("3E0A", 16))
// En el sistema hexadecimal podemos usar ciertas letras y este es un ejemplo de un numero en el sistema hexadecimal, su equivalente en el sistema decimal seria 15882 esto es exactamente el valor en numero decimal.


console.log(parseInt(3E0A, 16));
// Pero si estos valores los pasamos sin comilla nos daria un error de sintaxis, solo es con el numero binario que podriamos hacer esa escepcion, pero como tenemos letras necesitamos representarlo como una cadena de caracteres y tenemos el numero entero en el sistema decimal















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------