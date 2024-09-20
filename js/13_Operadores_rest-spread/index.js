// TEMA 115: Operador Rest
// 
// Ahora vamos a ver un operador que te va a permitir escribir funciones muy versatiles en JavaScript se llama el operador Rest, este operador te permite pasar cualquier numero de argumento a una funcion y que esos argumentos se agrupen como un arreglo.

// Vamos a tomar un cierto numero de argumentos pero ese numero de argumentos no va a ser fijo, asi que la tecnica hemos estado usando de explicitamente de escribir parametros en la lista no nos va a funcionar, porque al momento de llamar a la función cada uno de esos parametros debe tener un valor y no podemos pasar más valores ni menos valores de los que tenemos explicitamente declarados en la lista.

// Pero para solucionar ese problema y crear funciones que sean más versatiles podemos usar el operador REST, que consiste en escribir 3 puntos seguido de la palabra "args", esta palabra no es necesariamente es "args" es una varibale que estamos creando

// "args" se utiliza para abreviar la palabra argumentos, pero no necesariamente tiene que ser ese nombre podemos escribir cualquier nombre de una variable, lo importante aqui es que antes de ese nombre tengamos 3 puntos. Los 3 puntos es el operador REST, cuando lo escribimos en una lista de parámetros, vamos a mostrar los argumentos y como se recibieron en esa función.
function miFuncion(...args){
  console.log(args);
}

// Vamos a llamar a esta función con distintos numeros de argumentos.
miFuncion(1)




// ----------------
// OTRO EJEMPLO
// 
// Si pasamos una argumento podremos ver que tenemos un argumento con un solo elemento el argumento que fue el valor 1, pero notamos que se presenta como un arreglo no tenemos el argumento como tal, si no el arreglo, el operador de los 3 puntos convierte todos los argumentos en elementos de un solo arreglo, es decir, este parametro "args" va a ser un arreglo. Y es por eso que nos permite cualquier número de argumento, digamos 1 y 2
function miFuncion(...args){
  console.log(args);
}

miFuncion(1, 2)


// Y el resultado del operador es este [ 1, 2 ], lo convirtio a un arreglo con 2 elementos y asi podemos agregar cualquier numero de argumentos
function miFuncion(...args){
  console.log(args);
}

miFuncion(1, 2, 3, 4)



// ----------------
// OTRO EJEMPLO
// 
// También si necesitamos otros tipos de datos van a ser agregados como parte de ese arreglo, por ejemplo digamos que...
function miFuncion(...args){
  console.log(args);
}

miFuncion([1, 2, 3, 4], [4, 5, 6])

// Son 2 arreglos, 2 argumentos y veamos que pasa, los arreglos se añaden como arreglos anidados del arreglo principal, quiere decir que podemos estar seguros que esos elementos van a ser parte de un arreglo y puedes luego trabajar con ese arreglo en la función.




// ----------------
// OTRO EJEMPLO
// 
// Como la variable va a ser un arreglo podemos utilizar su propiedad "lenght" para trabajar con ese arreglo en la función y veremos cual es la loguitud de ese arreglo.
function miFuncion(...args){
  console.log(args.length);
}

miFuncion([1, 2, 3, 4], [4, 5, 6])
// Como resultado nos muestra 2, porque tenemos 2 argumentos, es decir 2 arreglos.




// ----------------
// OTRO EJEMPLO
// 
//  Ahora si pasamos un cierto número de argumentos
function miFuncion(...args){
  console.log(args.length);
}

miFuncion(1, 2, 3, 4, 5, 6)


// Cómo resultado nos mostrara el 6, porque tenemos 6 argumentos pasados a la función que luego fueron agregados o añadidos a ese arreglo, y la propiedad "lenght" es muy útil si necesitamos usar un ciclo que es lo que normalmente hariamos si queremos procesar cada uno de esos argumentos, iterar sobre el arreglo.





// OTRO EJEMPLO
// 
// Vamos a aplicar el nuevo conocimiento del operador REST para modificar una función manteniendo su funcionalidad existente, pero ahora digamos que queremos extender su funcionalidad para que podamos pasar cualquier numero de argumentos, en lugar de solo 3, X, Y y Z, queremos aplicar su función a cualquier numero de argumentos.
const sumar = (x, y, x) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

// El método "reduce" es un método que puedes llamar con un arreglo, este es el arreglo de argumentos
// .reduce() con estos argumentos suma los elementos del arreglo y retorna el resultado.
// Pasamos una función flecha como argumento




// OTRO EJEMPLO
// 
// Entonces.. para adaptar esta función, para que reciba cualquier número de argumentos lo que tenemos que hacer es modificar la lista de parámetros que tenemos en "const sumar = (x, y, z)"
// Actualmente recibe 3 parámetros, pero podemos utilizar el operador REST, para tomar cualquier numero de parámetros
const sumar = (...args) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

// Ya como el valor va a ser un arreglo no es necesario crear otro arreglo separado podemos borrar una línea de código
const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// Con esto ya sabemos como usar el operador REST para tomar cualquier numero de argumentos
// ------------------------------------------------------------------







// TEMA 116: OPERADOR SPREAD
// 
// Ahora conoceremos un operador que hace exactamente lo contrario que el operador REST, este operador se llama SPREAD, este operador toma un arreglo y practicamente lo descompone en sus elementos individuales para que la función pueda recibirlos y asignarlos a sus parametros correspondientes
const numeros = [1, 2, 3];

function sumar(x, y, z){
  return x + y + z
}

// En este caso vamos a utilizar el operador SPREAD, porque nosotros no podemos pasar directamente este argumento [1, 2, 3] a la funcion, la función toma 3 parámetros, necesita 3 valores separados y nosotros actualmente tenemos un arreglo
// En lugar de escribir esto sumar(numeros[0], numeros[1], numeros[2]) y extraer los valores individuales, tenemos un operador que nos permite hacer exactamente esto
console.log(sumar(...numeros))
// Es el mismo simbolo del operador REST, pero ahora en lugar de usarlo en la lista de parámetros lo vamos a usar en la llamada a la función cuando pasemos el argumento, luego escribimos el nombre de la variable, el nombre de la variable que hubieramos pasado como argumento con el arreglo y esto lo que basicamente va a hacer es descomponerlo en sus elementos individuales y asignarlos en ese mismo orden a los parametros
// ------------------------------------------------------------------













// espacios de 5 y 2, 5 títulos y 2 otros ejemplos
// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------