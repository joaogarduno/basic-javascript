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













// espacios de 5 y 2, 5 títulos y 2 otros ejemplos
// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------