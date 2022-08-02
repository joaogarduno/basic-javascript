
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
// ------------------------------------------------------------------





// TEMA 67: Clausula "else if"

// Utilizando varias CONDICIONES

// Ahora que pasa utilizando varias condiciones y para eso tenemos una clausula llamada "else if"

// Los condicionales tambien pueden verificar y manejar varias condiciones.

// En este ejemplo vamos a ver como puedes usar una clausula llamada "else" y "if" que nos permite hacer exactamente eso, manejar condiciones alternativas y decidir que pasa si alguna de ella es verdadera.

// Esta vez trabajaremos con funciones, definimos una funcion que se va a llamar clasificar valor

// Esta funcion va a tomar un valor como un parametro y va derterminar si el valor es divisible entre 2, divisible entre 3 o si no es divisible entre ninguno de esos numeros.

// Y lo haremos con un condicional
function clasificarValor(valor){
    if(valor % 2 == 0){
        console.log('Divisible entre 2');
    } else if(valor % 3 == 0){
        console.log('Divisible entre 3.');
    }     
    else{
        console.log('No es divisible entre las opciones');
    }
}

// Entre "if" y "else" vamos a poder agregar una clausula nueva que se llama "else if", como lo agregamos.
// Luego de la llave que cierra "if" escribimos "else if" separados por un espacio y luego colocamos un par de llaves, las llaves son vitales en Javascript, porque le indican al programa hasta donde llega cada bloque de codigo, cada parte de la estructura... pero, la clave aqui es que en ese bloque que agregamos debemos escribir una condicion luego de la palabra "if", esa condicion tambien se puede verificar y vemos la logica de esa condicion

// Y asi es como tenemos nuestra "funcion" con nuestra condicional, pero ¿Como funciona este condicional, cual es la logica del codigo?

// Si en el primer "if" la condicion es verdadera se ejecutara el primer console.log, pero... si esta condicion es falsa se verifica y se verifica que es falsa entonces ese codigo no se ejecuta y pasamos directamente a la segunda clausula con nuestra nueva condicional "else if", se verifica la condicion es decir se evalua la expresion, si es verdadera se ejecuta el console.log que corresponde a esa clausula del "else if", entonces, si esta es falsa pasamos a la siguiente clausula o en su defecto a la clausula "else" si es que existe alguna en esa condicional, y se ejecuta el ultimo console.log.

// Si todas las condiciones anteriores son falsas, en el condicional "else" nos va a servir como un respaldo a esa cuestion conocida como condicion.

// Vamos a llamar a la funcion con distintos valores para conocer como funciona este condicional
clasificarValor(2); // divisible entre ---> 2
clasificarValor(15); // divisible entre ---> 3
clasificarValor(7);// NO es divisible entre las opciones

// Asi es como funciona un condicional que tiene una clausula "else if" si las condiciones anteriores son falsas se evalua su condicon y se ejecuta su codigo si la condicion es verdadera.

// Pero solamente uno de los bloques de codigo se va a ejecutar, eso es clave en los condicionales, y es muy importante como funciona esa parte de los condicionales, solo un bloque de codigo se va a ejecutar, el bloque de codigo que corresponda a la "primera" condicion que es verdadera, si existen muchas condiciones que puedan ser verdaderas, solo la primera que sea verdadera se va a ejecutar y despues el programa va a continuar con la ejecucion normal.
// ------------------------------------------------------------------




// TEMA 68: Condicionales - Orden Lógico

// VEamos este ejemplo de esta condicional, ya que es muy importante entender como funciona cada una de sus clausulas y cual va a ser el resultado del codigo

// Definimos una funcion que se llamara "clasificarValor", esta funcion va a tomar un valor como argumento, asi que definimos ahi el parametro de esta funcion y dentro de la funcion vamos a escribir una condicional.
function clasificarValor(valor){
    // Esta condicional va a verficar 2 condiciones de ese valor.
    if(valor < 5){ // Primero verifica si "valor" es menor que 5
        // Si es el caso mostraremos el siguiente mensaje...
        console.log('Menor que 5');
    } else if(valor < 10){ // Si No, si tenemos que verificar la siguiente condicion, ya que la enterior es falsa pasamos a la clausula "else if", esta clausula verifica si el valor es menor que 10
        // Si es el caso vamos a ver este mensaje
        console.log('Menor que 10');
    } else{ // ahora si ambas condiciones anteriores son falsas, es decir el valor "no es menor que 5" y el "valor no es menor que 10", entonces la opcion que nos queda es que el valor sea "Mayor o igual a 10"
        console.log('El valor es Mayor o igual a 10');

    }

    // Esta es basicamente la estructura del condicional en este ejemplo.
}

// Aprenderemos pasandole distintos valores que le vamos a pasar a la funcion
// Llamamos a la funcion de esta forma
clasificarValor(2); // Menor que 5
// Se muestra ese mensaje ya que se cumple la primera condicion y es verdadera
// El valor 2 (es decir el numero dos), se asigna al parametro que llamamos "valor" y luego donde usamos el parametro (en la condicional se va a reemplazar ese valor para comprobar la condicion).
// En este caso estamos comprobando si 2 es "menor" que 5 y la condicion es verdadera por eso de ejecuta ese console.log, solo una de las clausulas es la que se ejecuta

// Las otras 2 clausulas no se ejecutan.
// ----------------



// OTRO EJEMPLO:

// En este ejemplo la condicion es FALSA

function clasificarValor(valor){
    if(valor < 5){ 
        console.log('Menor que 5');
    } else if(valor < 10){
        console.log('Menor que 10');
    } else{
        console.log('El valor es Mayor o igual a 10');
    }
}

clasificarValor(7); // Menor que 10

// Actualizamos el valor a 7 (como "argumento") y el mensaje que nos va a mostrar cambia a "Menor que 10" que pertenece a la segunda clausula de nuestro condicional que es el "else if "
// ¿Por qué? porque el ARGUMENTO 7 se asigna al PARAMETRO "valor", entonces la condicion se verifica y comparamos
// ----------------



// OTRO EJEMPLO: Hablando del ejemplo anterior

// Algo curioso que destacar, ya que en nuestro ejemplo anterior cuando pasabamos el valor 2 como argumento las primeras 2 condiciones eran verdaderas. No se si lo notaste anteriormente, pero es algo importante de resaltar.
function clasificarValor(valor){
    if(valor < 5){ 
        console.log('Menor que 5');
    } else if(valor < 10){
        console.log('Menor que 10');
    } else{
        console.log('El valor es Mayor o igual a 10');
    }
}

clasificarValor(2);

// Ya que en este caso el valor era 2 el valor era menor que 5 y era menor que 10, ambas eran verdaderas, pero solamente se muestra un mensaje, porque solo se ejecuta el codigo de la primera Clausula, bloque o condicion que sea verdadera en la secuencia.

// Por esto es muy importante que siempre se analice el order en el que se escriben estas clausulas.
// Ya que si nosotros hubieramos cambiado el orden de las condiciones, el mensaje hubiera sido distinto vemos a que nos referimos con el siguiente ejemplo:
function clasificarValor(valor){
    if(valor < 10){ 
        console.log('Menor que 10');
    } else if(valor < 5){
        console.log('Menor que 5');
    } else{
        console.log('El valor es Mayor o igual a 10');
    }
}

clasificarValor(2); // Menor que 10

// Podemos ver que el mensaje cambia y ahora es menor que 10
// YA que la primera condicion que lee es verdadera, es decir cumple con la condicion y se ejecuta primero.

// Por eso es importante que escojas el orden de las condiciones adecuadamente, para que la primera condicion que sea verdadera sea la que se ejecute.
// ----------------



// OTRO EJEMPLO: Si ninguna de las condiciones es verdadera

// Ahora si regresamos todo a la normalidad (El codigo)
// Vamos a probar si ninguna de las condiciones es verdadera, es decir si ambos son falsas y pasamos a la clausula "else"
function clasificarValor(valor){
    if(valor < 5){ 
        console.log('Menor que 5');
    } else if(valor < 10){
        console.log('Menor que 10');
    } else{
        console.log('El valor es Mayor o igual a 10');
    }
}

clasificarValor(15); // Valor Mayor o igual que 10

// Si pasamos el valor 15 como "argumento" se asigna ese valor al parametro que tenemos con el nombre de "valor" y empieza a leer la condicion y dice...
    // Primero: como 15 no es menor que 5, la primera condicion es FALSA, no es menor que 10
    // Segundo: Pasamos a la siguiente clausula del "else if", y como 15 no es menor que 10 esta segunda condicion es FALSA tambien 
    // Tercero: Pasamos a la siguiente clausula del "else" que sirve como un respaldo y es por eso que esa linea codigo que esta dentro de ese bloque o clausula se ejecuta y vemos el mensaje "El valor es Mayor o igual que 10"

// Ahora entendemos como funciona la logica de las clausulas "if", "else if" y "else".

// Puedes agregar mas de una clausula dependiendo de cuantas condiciones deseas verificar en el condicional lo importante es que la clausula "if" tiene que ser la primera clausula, luego "else if", tiene que ser la segunda clausula o tercera y asi sucesivamente, por ultimo la clausula "else" siempre tiene que estar al final, es la ultima porque sirve como respaldo
// ------------------------------------------------------------------















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------