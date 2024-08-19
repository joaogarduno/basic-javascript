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








// espacios de 5 y 2, 5 títulos y 2 otros ejemplos
// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------