// TEMA 112: FUNCIONES FLECHA
// 
// Ahora veremos un concepto nuevo llamado funciones flecha
// Las funciones flecha son un tipo mas compacto de funciones que podemos escribir en JavaScript que normalmente se utilizan cuando necesitamos definir funciones anonimas

// Funciones Anonimas son:
// Son aquellas que no tienen un nombre especifico, por ejemplo en ocaciones vamos a necesitar definir una funcion de esta forma.
const fecha = function(){
  return new Date();
}

// en lugar de la forma tradiconal que conocemos y dentro de esa función podemos retornar un nuevo objeto de fecha.

// return new Date() -> solo trae un objeto con la fecha actual del sistema, estamos retornando este objeto y sera utilizado como ejemplo para como podemos transformar esta funcion en una funcion flecha veremos que es muy conciso

// Este tipo de funciones se llaman "Anonimas" esto quiere decir que no tiene un nombre específico solo esta escrito la palabra reservada "function" tiene sus parentesis vacios porque no recibe ningun parametro y luego el cuerpo de la función es solamente una sentencia "return" y retorna un objeto -> new Date()

// Luego esa funcion es asignada a una variable que se define con "const" asi que actua como una constante llamada "fecha"


// Ahora esta funcion la podemos transformar en un tipo de funcion llamada "flecha" y es de esta forma.
const fecha = () => new Date();

// Se quita la palabra clave "function" y luego la llave que abre la función y la sentencia return en este caso solo porque tenemos una linea.

// Ahora el simbolo caracteristico de las funciones flecha es este => este simbolo esta creando una funcion flecha, que toma los parametros que estan en el parentesis, que en este caso es ninguno porque está vacía la lista y retorna este objeto -> new Date()

// Así es como podemos definir una funcion de forma mucho mas compacta si es necesario con las funciones flecha.

// ¿Cómo poder agregar parametros a estas funciones?

// Otra cosa que es importante mencionar es que las funciones flecha son muy utiles cuando necesitamos pasar una funcion como argumento a otra funcion, lo que se hace es escribirla directamente como argumento.
// ------------------------------------------------------------------






// TEMA 113: FUNCIONES FLECHA CON PARÁMETROS
// 
// Cómo definir funciones flecha que tomen uno o mas parametros, en el ejemplo anterior la funcion flecha no tomaba ningun parametro solo retornaba un objeto.

// En este ejemplo definiremos una funcion anonima que va a tomar el valor X y retornara el valor X + 3, por eso vamos asignarle a la variable sumar 3, ahora digamos que queremos transformar esta función en una funcion flecha para escribirla de manera mas concisa en el programa.

const sumaTres = (x) => x + 3

// Este es el equivalente en una función flecha
console.log(sumaTres(4));



// ----------------
// OTRO EJEMPLO
// Ahora vamos a hacer algo distinto, vamos a definir una función anonima la vamos a asignar a la variable concatenar y vamos a tomar 2 parametros "arreglo 1" y "arreglo 2"
const concatenar = function (arre1, arre2){
  return arre1.concat(arre2);
}

// Retornaremos los dos arreglos concatenados o los dos arreglos unidos, los elementos del arreglo 2 se van a añadir al final del arreglo 1 y lo hacemos llamando al método "concat()"
// Este es un metodo que puedes llamar para unir un arreglo con otro
console.log(concatenar([1, 2], [3, 4, 5]));



// ----------------
// OTRO EJEMPLO
// Ahora vamos a transformar esta función en una funcion flecha, exactamente igual que vimos en el ejemplo anterior...
const concatenar = (arre1, arre2) => arre1.concat(arre2);

console.log(concatenar([6, 7], [8, 9, 1]));
// Estos casos que estamos viendo eran funciones que solo tenian una línea y retornaban un valor, si la función original tienen mas de una línea tenemos que mantener las llaves.



// ----------------
// OTRO EJEMPLO
// Si notros teniamos una función que tomaba 2 parametros "a" y "b"
const sumar = function(a, b){
  let num = 6;
  return a + b + num
}


// En este caso lo que hariamos para poder definir la función flecha seria borrar la palabra y antes de la llave que abre el cuerpo de la función colocamos el simbolo de la fechita
const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};

// Y así tenemos la misma función que teniamos antes.
console.log(sumar(1, 1));
// ------------------------------------------------------------------






// TEMA 114: Valores por Defecto para Parámetros

// También podemos asignar un valor por defecto a los parámetros de una función flecha, esto es útil cuando queremos permitir que el usuario omita algún argumento para usar el valor por defecto
const incrementar = (num, valor) => num + valor;

// Para asignar un valor por defecto al incremento vamos a simplemente escribir un signo igual y el valor por defecto para ese parámetro...
const incrementar = (num, valor = 1) => num + valor;
// Este principio también aplica a las funciones normales y a las funciones que estamos definiendo y a las funciones anonimas

// Si llamamos a la función "incrementar()" y pasamos el valor 5 nada más para este número se deberia usar el valor por defecto
console.log(incrementar(5))




// ----------------
// OTRO EJEMPLO
// Pero si pasamos el valor del incremento como segundo argumento también deberia funcionar y se deveria de personalizar el valor de este parámetro, el resultado deberia ser 8
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5, 3))

// Así es como puedes asignarle un valor por defecto a un parámetro de tu función, el nombre del parámetro en la lista del parámetro seguido de un signo igual y el valor por defecto que quieres asignar.
// ------------------------------------------------------------------






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