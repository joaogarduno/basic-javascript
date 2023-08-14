// TEMA 107: var, let y const

// Vamos a empezar a ver la diferencia entre declarar una variable con "var" y declararla con "let"
// Una de las diferencias principales es que cuando declaramos una variable con "var"

// Por ejemplo: en este caso declaramos una variable llamada "campista", es una persona que esta acampando o que es parte de un campamento.
// Cuando la declaramos con la palabra clave "var" vamos a poder hacerlo 2 o mas veces, vamos a declarar una variable mas de una vez
var campista = 'Julian'
var campista = 'Folando'

// Ahora si mandamos a llamar esta variable en la consola, veremos la variable que contiene el nombre de "Folando"
// No existe ningun error en el codigo ya que se declara la variable con "var".
console.log(campista);
// ----------------




// OTRO EJEMPLO:

// Pero... cuando usamos la palabra clave "let" la situación es diferente, porque con "let" no podemos declarar una variable mas de una vez, es como una revision extra que hace nuestro codigo de Javascript para avisarnos que no podemos volver a declararla.

// En este caso la declaramos con "let" y la tratamos de volver a declarar
let campista = 'Rolando'
let campista = 'Marinado'

console.log(campista);
// Esto nos arroja un error ya que el identificado o "variable" nombre en el programa, dice que el "identificador" "campista" ya ha sido declarado en el programa.
// Entonces esto nos dice que una vez que declaremos esa variable con "let" no podemos volver a declarar.

// En este caso lo que podemos hacer es reasignar el valor o cambiar el valor, pero no podemos volver a escribir la palabra "let"

// Ejemplo:
let campista = 'Rolando'
campista = 'Marinado'

console.log(campista);
// Ahora si podemos ver el nuevo nombre que se le ha asignado a esa variable que en este caso es "Marinado", solo podemos usar "let" una sola vez.

// Vamos a seguir conociendo el "ambito" de "var" y "let" y como afectan donde podemos utilizar las variables en nuestro programa.
// ------------------------------------------------------------------





// TEMA 108: Ámbito de "var" vs. "let"

// Ahora hablaremos sobre la <<diferencia>> en el ambito de las variables que son declaradas con "var" y "let", cuando usamos "var", estamos creando alguna de estas 2 opciones:
// 1. O una variable "global" si esta en el programa principal , esa variable si esta dentro de una función.
// 2. O una variable local si esta definida en una función.

// Esa variable si esta dentro de una funcion se va a poder utilizar en toda esa funcion pero no fuera de esa función.

// Lo que habiamos visto anteriormente para las variables "globales" y "locales"

// Por ejemplo esta seria una variable "global" y le asignamos el valor de 4
var variableGlobal = 4

// Si queremos usarla en nuestro programa, lo vamos a poder hacer sin ningun problema, fuera de la función o dentro de alguna función que necesitemos.
console.log(variableGlobal)

function miFuncion(){
  // Podemos mostrar el valor de la variable "global" y actualizarla si necesitamos.
  // Entonces dentro de esta funcion vamos a mandar a llamar a la variable
  console.log(variableGlobal)
}

miFuncion()
// Mandamos a llamar a la funcion para mostrar que podemos ver el valor de la variable global y acceder a el.
// ----------------




// OTRO EJEMPLO:

// UTILIZANDO: "var"

// luego tambien podemos, dentro de la funcion usar "var" para definir una variable "local" que solo puede ser usada dentro de la función y podemos mostrar su valor tambien
var variableGlobal = 4

console.log(variableGlobal);

function miFuncion(){
  console.log(variableGlobal);

  var variableLocal = 8
  console.log(variableLocal);
}

miFuncion();

// Fuera de la función podemos acceder a la variable "global", pero si tratamos de acceder a la variable "local" veremos que es lo que pasa.
console.log(variableGlobal)
console.log(variableLocal)

// Esto nos muestra un error si abrimos la "consola" podemos ver un error que dice "Error de referencia" "variableLocal no esta definida"

// Cuando intentamos acceder a esa variable "local" que definimos dentro de la funcion en el programa principal tenemos un error, "no esta definida la variable porque era local", cuando usamos "var" ese es el efecto
// ----------------




// OTRO EJEMPLO:

// UTILIZANDO: "let"

// Cuando utilizamos "let" estamos reestringiendo a un mas el ámbito de la variable a el bloque o la expresión especifica donde se usa el bloque de código, su alcance esta limitado a esa expresión al bloque o a la declaración donde se define.

// Ejemplo:
// Diagamos que queremos escribir un cilo "for" en nuestro programa puede ser dentro de una función o en el programa principal.
// Hasta ahora nosotros hemos usado "var" en los ciclos para definir las variables, digamos que queremos implementar este ciclo y ejecutarlo en el programa.

// Si usamos "var" en el ciclo esa variable va a tener el ambito que corresponda a donde esta definido el ciclo, donde esta escrito el ciclo.
// En este ejemplo estamos en el habito "global", porque estamos en el programa principal, si estuviera dentro de una funcion esta variable "var i = 0" solo se podria usar dentro de la funcion y esta seria una variable "local".

// Y por eso como es una variable "global" en este caso podemos usar la variable "i" aunque el ciclo ya haya terminado porque sigue presente en ese ámbito global de todo el programa.

for(var i = 0; i < 3; i++){
  console.log(i);
}

console.log(i);

// El resultado de esto es:
// 0 1 2 3
// Ahi es donde podemos ver el valor de 3 


// Para distingir el mensaje vamos a colocar la cadena "variable" para distingir de los valores que se mostraron en el ciclo.

for(var i = 0; i < 3; i++){
  console.log(i);
}

console.log('Variable: ' + i);
// Una vez que termino el ciclo, entramos aquí y su valor es 3 porque fue incrementada antes de salir del ciclo.
// Pero aun asi se puede usar fuera del ciclo, esa es la diferencia si usamos "let"
// ----------------




// OTRO EJEMPLO:

// Si escribimos "let" aquí en lugar de "var", la variable solo se va a poder usar dentro del ciclo, no vamos a usarla aquí fuera de ese bloque de código definido por las llaves.

for(let i = 0; i < 3; i++){
  console.log(i);
}

console.log('Variable: ' + i);
// Veremos el resultado: 0 1 y 2 que fueron mostrados por el ciclo "for" y finalmente tenemos un mensaje de error "error de referencia y no esta definida" cuando llegamos el ultimo punto del programa que es este --> "console.log('Variable: ' + i);"

// Y solo existe la variable solo dentro de este bloque de codigo:
// for(let i = 0; i < 3; i++){
//   console.log(i);
// }

// Y no existe fuera del bloque de código, asi que en realidad para variables de "ciclo" normalmente podemos usar "let" si no las necesitamos fuera del ciclo.
// ----------------




// OTRO EJEMPLO:

// Tambien hay una diferencia notable cuando usamos "let" en un codicional
// Digamos que tenemos un condicional que muestra un color dependiendo del valor de esta variable "mostrarColor"

// Si esa variable es verdadera muestra el color y si no, no lo muestra

var mostrarColor = true;

// Dentro del condicional que es un bloque de codigo especifico podemos definir una variable usando "let" esa variable la estamos definiendo con "let", asi que solamente se va a poder usar en este bloque de código determinado por las llaves, es decir, rodeado por las llaves.
// Podemos usarla dentro de ese bloque sin problema
if(mostrarColor){
  let color = "verde"
  console.log("mi color favorito es: " + color)
}


// Ahora si intentamos acceder a la variable fuera de este bloque, el bloque del "if"
console.log(color)

// A la hora de correr el codigo anterior en la consola, vemos que dentro del bloque la variable funciona perfectamente, es decir dentro del bloque de codigo "if" si se ejecuto la tarea.

// Pero cuando ejecutamos el "console.log()" fuera del bloque, es decir, ese "console.log(color)" esta en el programa principal, tenemos un error de "referencia" ya que nos dice que "color no esta definida en esa parte del programa"

// Como usamos "let" no se puede acceder.
// ----------------




// OTRO EJEMPLO

// Ahora digamos que queremos tener acceso a esa variable fuera de ese bloque, lo que hariamos es cambiar "let" por "var"
var mostrarColor = true;

if(mostrarColor){
  var color = "verde"
  console.log("mi color favorito es: " + color)
}

console.log(color)

// Vemos que el error desaparece y podemos acceder a su valor mas alla de ese bloque de código donde fue definida o declarada.

// Esas son las diferencias principales entre "var" y "let".
// "var" crea una variable que se puede usar a nivel global, con ámbito global o dentro de una función, pero "let" es mas reestrictivo y reestringe el ambito de esa variable al bloque de código o a la expresion donde la variable fue declarado definida.

// Ya podemo trabajar con "var" y "let" y debemos escoger cual necesitamos para nuestro programa.
// Los mismos principios aplican si estuvieramos dentro de una función: "var" va a permitir que la variable se use en la función, pero si usamos "let" va a estar restringido su uso al bloque.
// ------------------------------------------------------------------










// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------