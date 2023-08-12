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


















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------