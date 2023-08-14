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
















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------