// TEMA 105: Operador Condicional (Ternario)

// Ahora hablaremos sobre el operador condicional tambien llamado el operador "ternario", este operador nos permite compactar lo que seria un condicional en una sola línea.

// Por ejemplo

// Digamos que definimos una función llamada "retornarMinimo" y esta funcion va a tomar 2 valores "x" y "y" y retornara el minimo de ambos valores, ¿cómo lo hariamos con un condicional?, ¿Cómo implementariamos esta funcionalidad?

function retornarMinimo(x, y){
  if(x > y){
    return x
  } else{
    return y
  }
}
// En la condición verificariamos si "x" es menor que "y" se retorna "x", si no se retorna "y", ¿Qué es lo que ocurre?.

// Esta condicional va a funcionar correctamente, pero hay una forma mas concisa de escribir esta misma  secuencia de instrucciones en JavaScript y es el operador condicional o ternario

// lo que vamos hacer es compactar todo esto en una linea que comenzara con la sentencia "return"
if(x > y){
  return x
} else{
  return y
}


// Veamos ¿cómo?
// Tu ya sabes que es lo que queremos hacer con la función

function retornarMinimo(x, y){
  // Escribimos return, pero que vamos a retornar el operador condicional comienza con una condición y la condion sera esta, la que escribimos en el anterior condicional.
  return x < y ? x : y;
  // Si esa condicion es verdadera "?" retornaremos el valor "x"
}
// El signo de interrogacion nos permite decir, que si esta condicion es verdadera "x < y" retorna --> "?" este valor "x", si no --> ":", es decir si la condicion es falsa retorna este valor "y"

// Esto es una condicional compactado en una sola linea con 2 simbolos que reemplazan toda la sintaxis anterior.

// Esta es la condicion --->   x < y
// Si la condicion es verdadera retorna o evalua a ese valor --->   ? x
// Y si esta condicion es falsa evalua a este valor --->   : y

// En este caso como tenemos una sentencia "return" se retornara cualquiera de estos 2 valores dependiendo del resultado ¿pero si no tuvieramos "return"? si tuvieramos solo "console.log()" tambien podria mostrar cualquier de estos 2 valores dependiendo del valor de esta condicion.

// Probamos la función
console.log(retornarMinimo(34, 78));


// NOTA: Recordar que a la hora de mandar a llamar una funcion lo podemos hacer de 2 maneras
// 1. Cuando dentro de la funcion se este ejecutando un console.log(), por ejemplo, cosole.log(x < y ? x : y), de estamanera para poder ejecutar la funcion debemos hacerlo asi... "retornarMinimo(23, 89)"
// 2. Pero cuando dentro de la funcion solo se llamando a la funcion "return", a la hora de mandar a llamar a la funcion debemos realizar un console.log(), ejemplo: console.log(retornarMinimo(2, 8))
// ----------------




// OTRO EJEMPLO:
function retornarMinimo(x, y){
  return x < y ? x : y;
}

console.log(retornarMinimo(30, 10));
console.log(retornarMinimo(8, 19));
console.log(retornarMinimo(70, 50));
console.log(retornarMinimo(44, 77));

// Si la condicion es verdadera la expresion se reemplaza por el valor de "x"
// Y si la condicion es falsa la expresion se reemplaza por el valor de "y"
// ----------------




// OTRO EJEMPLO:

// En este caso la estamos "retornando" el valor pero tambien podriamos "mostrar" el valor y se muestra en el siguienete ejemplo.

function retornarMinimo(x, y){
  console.log(x < y ? x : y);
}

retornarMinimo(30, 10);
retornarMinimo(8, 19);
retornarMinimo(70, 50);
retornarMinimo(44, 77);

// Es exactamente el mismo resultado, mostramos el valor de "x" o el valor de "y" dependiendo
// ----------------




// OTRO EJEMPLO

// Si definimos otro ejemplo en donde 2 variables estan definidas de la siguiente manera:
let a = 5;
let b = 9;

console.log(a > b ? a + 2 : b * 3)

// ¿Qué se muestra en la consola o mas bien que se va a mostrar en la consola si tenemos un operador ternario como el del ejemplo?

// 1. La condicion nos dice que "a" debe ser mayor que "b"
// 2. Si la condición es correcta, es decir si "a" si es mayor que "b" se retorna "a + 2"
// 3. Y si esta condicion no se cumple se retorna "b * 3"

// Se debe analizar bien la estructura del operador ternario y tratemos de determinar que valor es el que se mostrara en la consola.
// El valor es de 27 ya que la condicion es "falsa" ya que "a" no es mayor que "b", "a" es 5 y "b" es "9".
// Entonces como esta condicion es "falsa" pasamos a la consecuencia o la opcion 2, asi la expresión total evaluara la expresion "b * 3"
// ----------------




// OTRO EJEMPLO:

// Ahora, si la condiciÓn fuera verdadera...

let c = 15;
let d = 9;

console.log(c > d ? c + 2 : d *3)

// Como resultado vemos que es: 17
// En este caso se aplica la condicion de "c + 2", ya que la condicion seria "verdadera" y en la primera opción seria el resultado.

// Así es como se trabaja con el operador ternario, recordar cual es la estructura principal.
// 1. Primero tenemos la condicion.
// 2. Luego un signo de interrogación, el resultado si la expresion es verdadera.
// 3. Luego ":" este resultado seria si la expresión es falsa


// Ahora en el proximo capitulo explicaremos como utilizar multiples operadores condicionales u operadores ternarios
// ------------------------------------------------------------------





// TEMA 106: Múltiples Operadores Condicionales

// Podemos combinar el poder de los operadores condicionales o ternarios, escribiendo multiples operadores condicionales o ternario uno dentro del otro, similar al concepto que vimos anteriormente de anidado

// Escribiremos una función "compararNumeros" y la definimos, esta función va a comparar 2 números "a" y "b"
function compararNumeros(a, b){
  if(a == b){
    return 'a y b son IGUALES'
  } else if(a > b){
    return 'a es MAYOR que b'
  } else{
    return 'a es menor que b'
  }
}
// Operador "==" que nos permite saber si ambos valores seran del mismo tipo de dato.
// Tambien podemos utilizar el operador de igualdad estricta "===" si queremos verificar que el tipo de dato es igual es decir, es el mimo.

// Pero en este caso trabajaremos con el operador de igualdad "=="

// En ese caso si son iguales queremos retornar una cadena de caracteres que nos diga que "a" y "b" son iguales.
// Pero si ese no es el caso si "a > b" queremos retornar una cadena que diga que "a es mayor que b"
// Y por ultimo si ese no es el caso tampoco, retornamos la cadena "a es menor que b" o el equivalente es que "b es mayor que a".

console.log(compararNumeros(6, 10))
// Listo con eso ya tenemos nuestro condicional.
// ----------------




// OTRO EJEMPLO:

// Ahora como podemos reemplazar toda esta "condicional" con un operador "condicional ternario" que nos permita simular la funcionalidad de la clausula "else if()"

// Primero que nada debemos entender que es lo que queremos lograr con el operador "condicional"
function compararNumeros(a, b){
  // Lo primero que tenemos que hacer es escribir la sentencia "return" ya que lo primero que vamos a retornar el valor retornado por el operador condicional.
  return a == b ? 'a y b son IGUALES'
        : a > b ? 'a es MAYOR que b'
        : 'b es MAYOR que a'
}

console.log(compararNumeros(10, 10))

// 1. Lo primero que hacemos es escribir la sentencia "return", ya que vamos a retornar el valor retornado por el operador condicional
// 2. Lo primero que hacemos con el operador condicional es siempre escribir primero la condición --> "a == b", en este caso verificamos si "a" es igual a "b", estamos usando el operador de igualdad.
// 3. Ahora si ese fuera el caso o es el caso ¿qué es lo queremos hacer? retornar la cadena de "a y b son IGUALES"
// 4. Pero si ese no es el caso que queremos hacer, ¿cómo podemos simular que tenemos una "clausula" "else if()"?

// NOTA: Recuerda que cuando utilizamos un operador "condicional" o "ternario", este es el valor resultante si la condicion es "verdadera" ---> "a y b son IGUALEs". Pero si la condicion es "falsa" el valor que escribamos depues de los dos puntos ":" es el valor que se va a retornar.

// En este caso como queremos siguir verificando otras condiciones, es decir, mas de una condicion, no vamos a escribir un valor directamente despues de los dos puntos ":", si no otro operador condicional.

// NOTA 2: Cuando escribimos varias condiciones como lo haremos ahorita es recomendable dividir este operador en varias lineas, para alinear las condiciones verticalmente (como se muestra en el codigo de arriba).

// Entonces si la primera condicion es "falsa", el primer valor que esta entre comilla no se retorna y nos saltamos a la siguiente condicion es decir después de los dos puntos ":" y escribimos la nueva condición (recordar que despues de los dos puntos). Y en ese caso ¿Qué es lo que queremos retornar? queremos retornar una cadena que diga que "a es MAYOR que b".
// Y si ese tampoco es el caso, es decir, si la condición es falsa entonces queremos retornar otro valor, otra cadena y esa cadena dira "b es MAYOR que a"

// Y de esta manera podemos hacer uso de los operadores ternarios reemplazando los operadores multiples con la clausula de "else if()"
// Esta condicion utilizando un operador "ternario" es lo equivalente a la condicional que escribimos anteriormente con la clausula "else if()".

// Tenemos nuestras 2 conciones "a == b" y "a > b" y lo que seria equivalente a la clausula "else" haciendo uso de los dos puntos ":" como un valor por defecto al que va evaluar esa expresión que se va a retornar si las condiciones son falsas.

// En este caso veamos la lógica:
// Si esta condicion es "verdadera" --> "a == b" se retorna este valor --> "a y b son IGUALES"
// Si esta condición es "falsa" --> "a == b", pasamos al siguiente operador condicional ": a > b ? 'a es MAYOR que b'".
// Si esta condición es "verdadera" --> "a > b" el valor que se retornara sera "a es MAYOR que b".
// Y si es "falsa" --> ": 'b es mayor que a'", este valor es el valor como de respaldo si en dado caso de que las 2 anteriores condiciones son falsas.

// Con esto ya podemos hacer uso de los "multiples operadores condcionales" o "ternarios"
// Recordar de alinear las condiciones para que sea mas facil de leer y de entender visualmente
// Y en la ultima linea tiene el valor que se retornara si las otras 2 condiciones son falsas







// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------