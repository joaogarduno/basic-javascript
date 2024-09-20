// TEMA 117: SINTAXIS DE DESESTRUCTURACIÓN
// 
// La sintexis de Desestructuración nos permite asignar las propiedades de un objeto a variables que podemos usar en nuestro programa.
// Tenemos un objeto que representa un usuario ese usuario tiene un nombre "Joao Garduno" y tiene una edad 35.
const usuario = {
  nombre: 'Joao',
  apellido: 'Garduno',
  edad: 35
}

// Anterior mente si queriamos asignar las propiedades nombre y edad sus valores a variables que es lo que tendriamos que haber hecho, tomabamos el objeto usuario y asignabamos el valor de esa propiedad a la variable y lo mismo lo ubieramos hecho con la propiedad edad asi como esto...
const nombre = usuario.nombre;
const edad = usuario.edad;

// Pero con el nuevo estandar ES6 podemos hacer lo mismo pero en una sola linea para cualquier numero de propiedades que quisieramos asignar. Lo primero que haremos es lo siguiente.
// Lo primero que haremos es escribir un par de llaves, dentro de las llaves escribimos los nombres de las variables que queremos crear las que hubieramos creado una por línea, que son los nombres de las propiedades, y al otro lado de la asignación vamos a escribir el nombre del objeto "usuario"
const {nombre, edad} = usuario
// Esto lo que basicamente hara es buscar dentro del objeto usuario y dira si existe una propiedad llamada nombre, asi que asignara ese valor a la variable y tambien existe una propiedad llamada edad, asi que también a esa variable se le asigna el valor, eso es basicamente la sintaxis de la desestructuración mas simple que podemos usar, pero existen varias opciones




// OTRO EJEMPLO
// 
// Digamos que tenemos un objeto que representa unas coordenadas
var coordenadas = {
  x: 4,
  y: 6,
  z: 12
}
// Anteriormente en ES5 cuando estaba el estandar anterior tendriamos que hacer lo siguiente
// var x = coordenadas.x
// var y = coordenadas.y
// var z = coordenadas.z

// Pero ahora con la sintaxis de la desestructuración podemos hacer lo siguiente
const {x, y, z} = coordenadas;

console.log(x)
console.log(y)
console.log(z)

// También podemos usar la sintaxis de desestructuración de una forma mas elaborada, si el objeto tiene una estructura más compleja, es decir si el objeto fuese un objeto anidado
















// espacios de 5 y 2, 5 títulos y 2 otros ejemplos
// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------