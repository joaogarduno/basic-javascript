
// TEMA 65: Sentencias Condicionales

// Aprenderemos sobre estas herramientas poderosisimas para crear programas en JavaScript basicamente lo vas a usar en casi todos los proyectos o programas que escribas. Esto sera utilizado muy a habitual en nuestras actividades como programador, y estas son conocidas como las condicionales.

// Las condicionales nos permiten decidir si un bloque de codigo se ejecuta o no dependiendo de una condicion, basicamente nos da mas control sobre que es lo que va a ocurrir en el programa.

// Para escribir un condicional lo primero que escribimos es la palabra clave "if"

// "if" en español significaria algo como "si", un "si" condicional, es decir "Si esta condicion es verdadera..." la condicion va a estar entre parentesis, entonces hacemos lo que esta dentro de las llaves, la palabra clave o reservada "if", luego la condicion dentro de los parentesis y luego una secuencia de instrucciones que estara indentado dentro de esas llaves.

// Esta condicion tiene que ser verdadera para que se pueda ejecutar el codigo

// Asi que comenzaremos escribiendo el valor de TRUE dentro de los parentesis

if(true){
    console.log('La condicion es verdadera');

} // TRUE
// Podemos ver que el codigo se puede ejecutar y su resultado de esa condicion es verdadera

// Pero normalmente no vamos a escribir el valor de verdad directamente, no vamos a escribir TRUE, lo que vamos a escribir es una condicion.
// ----------------



// EJEMPLO:

var x = 5;

if(x > 2){
    console.log('Condicion verdadera!!');
}
// ----------------



// EJEMPLO:

var x = 5;

if(x < 2){
    console.log('Condicion verdadera!!');
}
// ----------------



// EJEMPLO: Condiciones mas elebaoradas

var x = 5;

if(x > 2 && x < 10){
    console.log('Condicion verdadera!!');
}

// Estamos combinando los operadores de comparacion y los operadores logicos para formar condiciones mas complejas
// ----------------



// EJEMPLO: Estaciones

var estacion = 'Invierno';

if(estacion == 'Invierno'){
    console.log('Siiii! Invierno es la mejor epoca del año!!');
}
// En este caso la condicion es verdadera, porque el valor de estacion es invierno, como la condicion es verdadera, se ejecuta la linea de codigo
// ----------------



// EJEMPLO:

// Ahora si la condicion es falsa que la escion no es la que colocamos en la condicion...

// Por ejemplo si ahorita estamos en "Verano" y la condicion dice que tiene que ser invierno para que esto ocurra, que es lo que va a ocurrir??

// en este caso Nada porque la condicion era FALSA (FALSE)
// El codigo no se ejecuta y como no hay mas lineas de codigo el programa simplemente termina 

var estacion = 'Verano';

if(estacion == 'Invierno'){
    console.log('Siiii! Invierno es la mejor epoca del año!!');
}

console.log('Despues del condicional...');

// Para que notemos que cualquier linea que este despues de la llave que cierra la condicion, va ser ejecutada si la condicion es falsa (false)

// Y tambien va a ser ejecutada si la condicoon es verdadera, cuando se termine de ejecutar este bloque de codigo, ahorita la condicion es falsa, no se ejecuta el primer console, asi que se salta a la linea siguiente del codigo
// ----------------



// EJEMPLO:

// Ahora si la condicion es verdadera...

var estacion = 'Invierno';

if(estacion == 'Invierno'){
    console.log('Siiii! Invierno es la mejor epoca del año!!');
}

console.log('Despues del condicional...');

// Se ejecuta la linea del console que esta dentro del "if" y ademas se ejecuta el ultimo console

// Bueno ahora entendemos como escribir un condicional basico con una condicion, pero tambien podemos manejar varias condiciones y decidir que es lo que pasa si la condicion es falsa.
// ------------------------------------------------------------------




// TEMA 66: Cláusula "else"

// Tambien podemos expandir nuestras condicionales para decidir que es lo que ocurre si la clausula de la condicional es falsa

// Escribimos nuestra condicional...
if(true){
    console.log('La condicion es VERDADERA');
} else{
    console.log('La condicion  es FALSA');
}
// Y se lee asi... "Si la condicion es verdadera, si no es falsa"


// Pero cambiando la condicional a false veamos que sucede...
if(false){
    console.log('La condicion es VERDADERA');
} else{
    console.log('La condicion  es FALSA');
}

// la parte de "else" es la palabra que podemos agregar a los condicionales
// Es decir, es la misma estructura que trabajamos anteriormente, pero ahora luego de la llave que cierra la clausula "if" escribimos la palabra "else", esta es una palabra especial y reservada en JavaScipt, que nos permiten decidir que es lo que pasa si la condicion llega a ser falsa.
// ----------------



// OTRO EJEMPLO:

var x = 5;

if(x < 2){
    console.log('Esta condicion es VERDADERA');
} else{
    console.log('La condicion es FALSA')
} // FALSE

// como podemos observar la condicion como resultado es FALSA, y se muestra ese mensaje en consola porque se ejecuta la linea de codigo que esta dentro de la clausula de "else"
// ----------------



// OTRO EJEMPLO:

// "Si la estacion es verano"

var estacion = 'Invierno';

if(estacion == 'Verano'){
    console.log('Comenzo el verano. Ya podemos ir a la playa.');
} else{
    console.log('Ya quiero que llegue el verano para poder ir a la playa');
} // FALSE
// ----------------



// OTRO EJEMPLO:

// Utilizando el operador de igualdad estricta.
// Podemos utilizar el operador de igualdad estricta, para verificar el tipo de dato

var estacion = 'Invierno';

if(estacion === 'Verano'){
    console.log('Comenzo el verano. Ya podemos ir a la playa.');
} else{
    console.log('Ya quiero que llegue el verano para poder ir a la playa');
} // FALSE

// El segundo mensaje fue el que se mostro, porque la condicion es falsa

// Ahora ya sabemos como trabajar con la clausula "else"
// La clausula "else" sirve como un respaldo y siempre va estar ubicada luego de la clausula "if".
// La clausula "if" es como la principal y este "else" es simplemente un respaldo, contentado la misma pregunta ¿Qué llegara a pasar si la condicion es falsa?.

















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------