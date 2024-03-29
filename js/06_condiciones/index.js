
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



// EJEMPLO: Condiciones mas elaboradas

var x = 5;

if(x > 2 && x < 10){
    console.log('Condicion verdadera!!');
}

// Estamos combinando los operadores de comparación y los operadores lógicos para formar condiciones mas complejas
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





// TEMA 69: Encadenar Sentencias "if... else"

// Vamos a ver como podemos escribir una condicional con mas de una clausula "else if"

// Vamos a ver un ejemplo de un condicional con 2 clausulas "else if"
// Vamos a verificar varias condiciones.

// Primero vamos a definir una funcion
// Y nuestro ejemplo va a estar enfocado en interpretar el indice de masa coorporal de una persona, vamos a tomar ese valor de indice de masa coorporal y luego vamos a clasificarlo con un condicional.

// Los valores van a estar clasificados deacuerdo a una tabla que puedes conseguir en el centro de control de enfermedades de estados unidos el CDC

function interpretarIMC(indiceDeMasaCorporal){
    if(indiceDeMasaCorporal < 18.5){
        console.log('BAJO peso');
    } else if(indiceDeMasaCorporal <= 24.9){
        console.log('NORMAL peso');
    } else if(indiceDeMasaCorporal <= 29.9){
        console.log('SOBRE peso');
    } else{
        console.log('Estas a punto de morir');
    }
}
interpretarIMC(32.2);
interpretarIMC(28.5);
interpretarIMC(22.2);
interpretarIMC(17.8);
interpretarIMC(18.5);

// Ya sabemos como funciona la logica de los condicionales

// Recordar que solo el codigo de la primera condicion verdadera es el que se ejecuta
// Ninguna de las otras condiciones se evalua o se ejecuta despues de la primera que sea verdadera

// Ya sabemos como trabajar con condicionales y con varias clausulas "else if"
// ------------------------------------------------------------------





// TEMA 70 - Proyecto 4: Codigo de Golf

// Proyecto 4

// Comencemos con nuestro mini proyecto, en este mini proyecto vamos aplicar nuestros conocimientos de operadores de comparacion y de condicionales tambien vamos a definir una funcion asi que vamos a practicar varios de los conceptos que hemos aprendido.

/*

En el juego de Golf cada hoyo tiene un par que representa el numero promedio 
de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima o por debajo del par esten tus golpes.

Tu funcion tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes 
en orden de mayor a menor prioridad:

Golpes              Retornar
-----------------------------------
1                   "Hole-in-one!"
<= par -2           "Eagle"
par - 1             "Birdie"
par                 "Par"
par + 1             "Bogey"
par + 2             "Double Bogey"
>= par + 3          "Go Home!"

par y golpes siempre serán numéricos y positivos

*/

// Asi que no tenemos porque preocuparnos por otro tipo de valor que pudiera ser negativo u otro tipo de dato.

// Ya con las instrucciones podemos empezar a implementar nuestra funcion primero es la palabra clave llamada "function", eso es vital para definir una funcion y vamos a llamar a la funcion "puntajeDeGolf", y dijimos que la funcion tendria 2 parametros "par" que es el numero promedio de golpes esperados y "golpes" y el numero de golpes ejecutados en realidad.
function puntajeDeGolf(par, golpes){
    // Ahora tenemos que usar un condicional para implementar esta tabla, porque dependiendo de la diferencia entre los "golpes" y "par" es que vamos a retornar una cadena especifica
    if(golpes == 1){
        return "Hole-in-one"; // Practicando el concepto de como retornar o devolver un valor de una funcion
    } else if(golpes <= par - 2){
        return "Eagle";
    } else if(golpes == par -1){
        return "Birdie";
    } else if(golpes == par){
        return "Par";
    } else if(golpes == par + 1){
        return "Bogey";
    } else if(golpes == par + 2){
        return "Double Bogey";
    } else if(golpes >= par + 3){
        return "Go Home!"
    }
}
console.log(puntajeDeGolf(10, 30));
// ------------------------------------------------------------------




// TEMA 71: Sentencias Switch

// Veremos otra estructura muy util para programar en Javascript, encierta forma de reemplazar las condicionales en Javascript

// Vamos a definir una funcion que va a clasificar un valor nuevamente
function clasificarValor(valor){
    // El valor sera un numero entre 1 y 4 y cada uno de esos numeros de esos valores van a estar asociados a una cadena especifica una cadena de caracteres, la funcion va a retornar esa clasificacion, esa cadena a partir del numero.

    // En lugar de utilizar una condicional vamos a utilizar algo que se llama sentencia Switch esa sentencia switch nos va a permitir describir codigo que es muy similar al de un condicional.
    var respuesta;

    // Pero Switch nos permite a partir de una expresion o de un valor decidir que va a pasar en base a ese valor, solo ese valor o solo el resultado de esa expresion que tenemos entre parentesis.
    // Escribimos la palabra clave Switch y entre parentesis el valor que queremos usar dentro de esta estructura.
    // En este caso queremos clasificar el valor que recibimos como argumento, como parametro.
    switch(valor){
        // Entonces... dentro de las llaves escribimos esto...
        case 1: 
        // Si el valor es igual a 1, ¿qué es lo que va a ocurrir?
            respuesta = "alpha";
            // Vamos asignar la cadena "alpha" a la variable respuesta
            break;
            // Y luego salimos de la sentencia Switch         
    }
}

// La sentencia Switch funciona asi, nosotros definimos casos especificos para el valor de esta varible o de esta expresion, si ese valor es igual, a este valor que nosotros escribimos en "case 1" entonces todo lo que esta dentro del "case" se ejecuta.

// Tambien es importante terminar cada caso o cada posibilidad con una sentencia "break"
// ----------------



// OTRO EJEMPLO: Segundo caso

function clasificarValor(valor){
    var respuesta;
    switch(valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break
        case 3:
            respuesta = "gamma";
            break
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(3));
// Esto es como un condicional pero mas especifico, porque nos permite decidir que es lo que va a ocurrir solo en base al valor que tenemos aqui entre parentesis.

// no estamos escribiendo condiciones con operadores de comparacion ni estamos utilizando operadores logicos solo estamos escribiendo un valor y en base a ese valor vamos a ejecutar un bloque de codigo especifico.

// Las sentencias "break" que vemos, lo que hace es detener el proceso de ejecucion de esta estructura, cuando el caso sea correcto, es decir sea verdadero y ese es el valor de la variable, el codigo se va a ejecutar y cuando legue a esta linea de "break" todo lo demas se va a ignorar, si no que simplemente esta estructura  se va a terminar y seguimos con nuestra ejecucion abajo fuera de las llaves del switch, ese es el rol de "break" y por eso es importante ponerlo despues de cada caso para que no se continue ejecutando otros posibles caso mas abajo.

// Pero podemos ver que la sintaxis es mas consisa que la de una condicional para este caso especifico y finalmente vamos a retornar el valor "respuesta"

// La sentencia Switch solo nos permite en este caso seleccionar el valor de la variable respuesta y luego que se haya seleccionado ese valor, se interrumpe inmediatamente su ejecucion y se pasa a esta linea, donde retornamos el valor de la respuesta.
// ----------------



// OTRO EJEMPLO: Switch con una cadena de caracteres.

// Con este ejemplo mostraremos que switch no solo se puede interactuar con numeros, si no que tambien con cadena de caracteres, es decir, letras o string.
var producto = "Pizza";

switch(producto){
    case "Pizza":
        console.log("La pizza individual cuesta $10.55");
    break;
    case "Hamburguesa":
        console.log("La hamburgesa sencilla cuestan $6.78");
    break;
    case "Helado":
        console.log("El Helado sencillo cuesta $2.8");
    break;
}
// Tambien podemos escribir esta sentencia Switch dentro de una funcion como normalmente lo estamos haciendo, con los ejemplos anteriores.

console.log("Luego del Switch");

// Asi es como basicamente funcionan las sentencias Switch, son muy utiles para escribir condicionales cuando tenemos un numero finito especifico de opciones que queremos evaluar.

// Tambien podemos agregar una opcion predeterminada a la sentencua Switch que es el equivalente a la sentencia Switch de una clausula else en un condicional, sirve como un respaldo,  vas a notar como lo podemos hacer, en el proximo tema
// ------------------------------------------------------------------




// TEMA 72: Sentencias Switch: Opción Predeterminada.

// Tambien podemos agregar una opcion prederterminada a la sentencia Switch, veamos que podemos hacer, esa opcion se va a ejecutar sin ninguno de los valores, es el valor de la variable o de la expresion, comencemos con un ejemplo definiendo una funcion.

// Esta funcion va a seleccionar la opcion que corresponda a un valor especifico entre 1 y 3 y vamos a tener una opcion predeterminada para el idioma en caso de que ninguno de los valores concuerde con el valor de la variable.
function seleccionarIdioma(valor){
    // Definimos una variable "idioma", a la cual le vamos asignar el valor del idioma dentro de la sentencia Switch como una cadena, aqui estamos escribiendo Switch y entre parentesis vamos a colocar la variable valor.
    var idioma;

    // El valor de esa variable va a decidir que es lo que ocurre
    switch (valor){
        case 1:
            idioma = "Español"
            break;
        case 2:
            idioma = "Francés"
            break;
        case 3:
            idioma = "Italiano";
            break;

        // Aqui es donde se implementa la parte nueva
        // Puedes agregar una opcion predeterminada para esta sentencia switch, como lo hacemos con la palabra clave "default" 

        // "default" literalmente podemos traducirlo en español como por defecto, es una opcion que se ejecuta por defecto si ninguno de estos valores es el valor de la variable, es equivalente a la clausula "else", es decir es un respaldo si ninguna de las anteriores concuerdan, por defecto vamos a colocar el idioma "ingles" sera la opcion predeterminada, en caso de que el valor no sea ni uno ni 2 ni 3.
        // Tambien se recomienda que al final del "default" tambien coloquemos una sentencia "break", porque no necesariamente "default" tiene que ser la ultima opcion en esta secuencia, normalmente es la ultima por convencion, como sirve como un respaldo, normalmente la escribimos al final, pero no necesariamente o tecnicamente tiene que ser asi, entonces igual se recomienda colocar un "break", aunque este al final (pero es opcional)
        default:
            idioma = "Inglés";
            break;

    }

    // Y luego que vamos hacer vamos a retornar el valor de la variable idioma
    return idioma;
}


console.log(seleccionarIdioma(4));

// Para probar con la opcion de "default" es decir ver que resultados espero de eso, seleccionamos un valor que no existe en nuestra sentencia, y asi podemos ver que nuestro "return" o el regreso del valor es "ingles", el que seleccionamos como opcion.
// Porque ninguno de estos valores es el valor de la variable, no complia con su sentencia, es decir no corresponde a ninguno de los numeros que tenemos como opciones en nuestra condicion, asi que por defecto como no se consiguio el valor especifico se ejecuta su codigo que contiene y el idioma es ingles.

// Asi es como funciona la opcion "defualt" en la sentencia switch es muy util porque nos permite manejar cualquier otro tipo de caso o de valor para esta variable o expresion

// Bien ahora entendemos como trabajar con la sentencia Switch, tambien otra variacionde esta sentencia, de la sentencia switch es, realizar el mismo procedimiento o ejecutar el mismo codigo para varios caso

// Por ejemplo que digamos que el codigo es 2 o 3 queremos hacer exactamente lo mismo, eso es posible y vamos a aprender como lo podemos hacer en la proxima parte.
// ------------------------------------------------------------------




// TEMA 73: Sentencias Switch: Múltiples Casos

// En las sentencias Switch tambien podemos escoger, ejecutar un codigo especifico para varios valores, conoceremos como podemos hacer eso

// DEfinimos una funcion que se va a llamar, "clasificarVolumen", vamos a tener numeros entre el 1 y 6 que van a representar la intensidad del volumen en un dispositivo, el parámetro se va a llamar valor, el valor que va a representar el volumen sera una cadena de caracteres que deba describir la intensidad del volumen, puede ser "bajo" "intermedio" "alto", para eso, para asiganr ese valor tenemos una sentencia Switch, esa sentencia Switch va a depender del valor del parametro, el valor o el argumento que pasamos a la funcion.

// Si el valor es 1 digamos que queremos asignar un volumen bajo, y aqui tendiamos break al final del caso como se recomienda.

// Pero si nosotros tambien queremos asignar el volumen intermedio, cuando el valor que tenemos aqui es 2  o es 3, es decir 2 valores pueden realizar la misma accion, como lo podemos escribir.

// Escribimos si el valor es 2 o si el valor es 3, simplemente escribimos cada uno de los posibles caso y que queremos hacer si ese caso es verdadero, por ejemplo, si el valor es 2 o si el valor es 3, que queremos hacer, queremos asignar el volumen intermedio a la variable, ejecutamos esa linea de codigo y luego salimos de la sentencia Switch con "break", tambien podemos tener mas de 2 casos, manejados de la misma forma, por ejemplo.

// 

function clasificarVolumen(valor){
    var volumen;

    switch(valor){
        case 1:
            volumen = "Bajo";
            break;
        case 2:
        case 3:
            volumen = "Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }

    return volumen;
}
// Ya tenemos nuestra funcion para clasificar el volumen con una sentencia Switch

// Mandamos a llamar nuestra funcion
console.log(clasificarVolumen(2));


// Ahora ya sabemos como definir o como escribir una sentencia Switch completamente, ya sabes como escribir sus casos, como manejar varios casos de la misma forma y como agregar un caso que se ejecute por defecto si en ninguna de las opciones, es el valor de esta variable o expresion.
// ------------------------------------------------------------------




// TEMA 74: Reemplazar "if else" por "switch"


// Como reemplazar condiciones con Switch
// Vamos a concer la equivalencia entre los condicionales y las sentencias Switch

// Entonces en ciertos casos podemos reemplazar condicionales con sentencia Switch.

// Por ejemplo en este caos tenemos una funcion llamada "seleccionarIdioma", que toma un valor 1, 2, 3 o si el valor es cualquier otro numero, va asignar el idioma por defecto "ingles" y luego retorna ese idioma, retorna el valor de esa variable "idioma" que declaramos.
function seleccionarIdioma(valor){
    var idioma;

    if(valor == 1){
        idioma = "Español";
    } else if(valor == 2){
        idioma = "Francés";
    } else if(valor == 3){
        idioma = Italiano;
    } else{
        idioma = "Inglés";
    }

    return idioma;
}

console.log(seleccionarIdioma(6));

// Pero que ocurre con esto?? Nosotros podemos reemplazar este condicional con una sentencia Switch porque como puedes ver, estamos verificando casos especificos, relacionados con el valor de esta variable, si el valor es igual a 1 ocurre algo


// Entonces, vamos a ver como adaptar este codigo utiizando la sentencia Switch

function seleccionarIdioma(valor){
    var idioma;

    switch(valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }

    return idioma;
}
// Como podemos ver ya transformamos el condicional en una sentencia Switch

console.log(seleccionarIdioma(2));

// Entonces... cuando en un condicional estamos verificando si el valor de una variable o de una expresion es igual a otro valor podemos simplemente reemplazarlo con Switch y agregar un valor por defecto o una accion que se va a ejecutar por defecto con "default".
// ------------------------------------------------------------------




// TEMA 75: Retornar Valores Booleanos

// Ahora que ya sabemos como funcionan las sentencias Switch en JavaScript y porque son muy utiles.

// Vamos a cambiar un poco el tema, ya que veremos como podemos retornar de forma muy concisa valores Booleanos:
    // Verdadero (TRUE)
    // Falso (FALSE)

// Veamos el siguiente ejemplo, definimos una funcion que se va a llamar "esMenorQue" esta funcion va a comparar 2 valores "a" y "b", son los parametros que vamos a definir para esos valores y vamos a comprobar si "A" es menor que "B", estrictamente menor que "b", si es menor que "b" entonces retornaremos TRUE y si no vamos a retornar "false"
function esMenorQue(a, b){
    // Inicialmente podemos hacerlo con una condicional similar a este
    if(a < b){
        return true;
    } else{
        return false;
    }
}
// Esto funcionalmente va a cumplir su proposito, pero hay una forma mas concisa de escribirlo, mucho mas concisa que va a resultar en una sola linea.

// Lo que nosotros podemos hacer en lugar de escribir esa condicional, es simplemente retornar el valor de esta comparacion
function esMenorQue(a, b){
    return a < b;
}
// Solamente esto es lo que necesitamos para reemplazar lo que teniamos antes y podemos ver la diferencia
// Debemos notar la diferencia (entre las 2 opciones) en complejidad.
// Entonces que es lo que tenemos con esta ultima funcion, estamos retornando el resultado de esta comparacion, si "a" es menor que "b", esa condicion sera verdadera, y el valor TRUE se va a retornar, si es falsa esta condicion va a ser FALSE y ese es el valor que va a retornar y cumple exactamente el mismo proposito
console.log(esMenorQue(3, 6)); // TRUE

// Ahora si invertimos los el orden "6, 3", el resultado sera FALSE, asi que esta funcionando exactamente como queriamos
console.log(esMenorQue(6, 3)); // FALSE

// Tambien si los valores son iguales el resultado es FALSE
console.log(esMenorQue(3, 3)); // FALSE
// Ya que estamos ocupando un operador estricto, es decir el operador de comparacion estricta, estamos verificando si "a" es estrictamente menor que "b"

// Bien ahora sabemos como reemplazar un condicional usado para retornar un valor booleano de una funcion y ese es el valor que se va a retornar.
// ------------------------------------------------------------------





// TEMA 76: Patrón de Retorno Anticipado

// Continuando con el tema de "funciones" y de aspectos importantes que debes saber de las funciones veremos el patron de retorno anticipado.

// Veamos que implica el patrón de retorno anticipado.

// Cuando retornamos el valor de una funcion en ese momento que retornamos el valor, la funcion se detiene completamente, cualquier linea que este luego de "return" no se va a ejecutar.

// Veamos esto con una funcion de muestra
function miFuncion(){
    console.log("hola");
    return "Mundo";
    console.log("adios");
}
// ¿Qué ocurre aquí?, podemos ver que el editor de codigo en la linea 777 se torna un poco mas tenue, es decir un poco mas transparente, ¿Por qué? porque si colocamos nuestro cursor encima de la linea nos dice que se a detectado codigo que no se puede alcanzar durante la ejecucion del programa "unreachable code detected" esto se puede traducir como inalcanzable
// La linea 777 nunca se va a ejecutar la linea que dice "console.log("adios")", ¿Por qué? porque esta despues de una sentencia "return", cuando esta sentencia "return" se ejecuta, todo el codigo que pueda estar despues de "return" ya no se ejecuta la funcion se detiene inmediatamente y lo comprobamos ejecutando la funcion o una llamada a la funcion.
console.log(miFuncion());

// Esto es importante que conoscamos porque este es el patron anticipado es muy util, especificamente es util cuando necesitamos detener la funcion por alguna condicion especifica.
// ----------------



// OTRO EJEMPLO:

// En este ejemplo vamos a definir una funcion que se llame calcular raiz cuadrada, esa funcion va a tomar un numero como parametro.
// ¿Qué vamos hacer? bueno la raiz cuadrada de un numero no existe por lo menos no en los numeros reales que son con los que normalmente trabajamos no existe si es un numero negativo, asi que, si esa condicion es verdadera si el numero es negativo no podemos calcular la raiz cuadrada y que es lo que deberiamos hacer simplemente detener la funcion y retornar un valor.
// En ese caso lo que hariamos es retornar el valor "undefined" porque la operacion no esta definida.
function calcularRaizCuadrada(num){
    if(num < 0){
        return undefined;
    }
    return Math.sqrt(num);

}
// Estamos retornando simplemente el valor generico que retornan las funciones cuando no se retorna un valor, en caso de que si el valor sea valido, sea mayor o igual a cero, entonces podemos calcular la raiz cudrada del numero y retornarlo lo hariamos con esta llamada a la funcio ".sqrt" (raiz cudrada)

// Lo importante de el "patron de retorno anticipado" esta aqui en la condicion "if(num < 0)", si la condicion es verdadera vamos a retornar el valor de "undefined" e inmediatamente la funcion se va a detener.

// Recuerda que las funciones por defecto retornan "undefined"

// Cuandos se ejecuta el "return Math.sqrt(num)" esta linea ni se alcanza no existe, es como si no existiera, solamente cuando se ejecuta esta linea primero.
// Pero si la condicion es falsa el condicional no se ejecuta y pasamos a esta linea y se retorna el valor

console.log(calcularRaizCuadrada(25));

console.log(calcularRaizCuadrada(-5));
// ----------------



// OTRO EJEMPLO

// Ahora digamos que no se incluye la condiciona
function calcularRaizCuadrada(num){
    // if(num < 0){
    //     return undefined;
    // }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-5));
// Nuestro resultado seria "NaN", que en Javascript significa "Not a Number", este es un tipo de valor especial que se retorna cuando una operacion retorna un valor que no es valido, que no es un numero, no es un numero valido.

// Para evitar eso necesitamos utilizar el "patron de retorno anticipado" y evitar cualquier valor innesperado o situacion o error que se puede presentar

// Bien ahora sabemos como utilizar ese patron y que "return" detiene la funcion inmediatamente y que puedes escribir mas de una sentencia "return" en nuestras funciones, dependiendo de donde necesitas retornar el valor en que punto del codigo necesitas retornar el valor y detener la ejecucion de la funcion.
// ------------------------------------------------------------------





// TEMA 77 - Proyecto 5: Conteo de Cartas

// Proyecto 5

// Mini proyecto de contar cartas, para el juego "Blackjack", el juego de cartas "blackjack"...



// Ahora vamos a trabajar en un mini proyecto centrado en representar lo que ocurre en un juego de casino de Blackjack un juego de cartas, vamos a practicar nuestro conocimiento de funciones y de la sentencia Switch que acabamos de aprender

// 


/* Descripcion

En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro
del numero relativo de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador debería aporstar alto.
- Cuando el conteo es 0 (cero) o negativo, el jugador debería apostar bajo.



Cambio del conteo                       Cartas
-----------------------------------------------------
    +1                                2, 3, 4, 5, 6
    0                                 7, 8, 9
    -1                                10, 'J', 'Q', 'K', 'A'


Nuestra meta es definir una función para contar cartas.

La función debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (observa la tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo.

El conteo actual y la decisión del jugador
("apostar" o "esperar") deben estar separados por un espacio

*/



// definimos la variable global conteo, sera una variable Global porque esta definida en el programa principal y la estamos definiendo con la palabra clave "var", inicialmente su valor sera de 0 (cero), ya que se va a ir incrementando o disminuyendo o dejando exactamente igual dependiendo del valor de la carta
var conteo = 0;


// Definimos nuestra funcion "contarCartas"
// El parametro se llama "carta", ese parametro tendra un valor especifico, numerico o letra, dependiendo el tipo de carta.
function contarCartas(carta){
    // Declaramos una variable local, esta variable solo va ser accesible o solo va a poder usarse dentro de la funcion "contarCartas", esa seria nuestra "decision final" si apostar o esperar.
    var decision;

    // pero primero tenemos que actualizar el valor del conteo, para eso vamos a utilizar una sentencia "SWITCH"
    // Esa sentencia Switch va analisar el valor de la "carta" y dependiendo de su valor vamos a actualizar el valor de "conteo", aqui podemos ver en la tabla que si el valor es "2, 3, 4, 5, o 6" cualquiera de estos numeros deberiamos de aumentar el valor del conteo en 1, asi que vamos hacerlo
    // recuerda entre "2 y 6", y como estamos utilizando una sentencia Switch vamos a tener varios caso posibles para ejecutar el mismo codigo, para eso escribimos muchos casos distintos

    // Si carta tiene un valor de 2, 3, 4, 5 o 6 ¿Qué es lo que vamos hacer? vamos a incrementar el valor de la variable conteo en 1, simplemente escribimos 2 signos mas a la derecha del nombre de la variable, ejemplo, "conteo++", esto nos permite incrementar su valor en 1 y como estamos en una sentencia "switch" en uno de los casos tenemos que escribir la sentencia "break".
    switch(carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;

        // Ahora para la segunda categoria de valores "7, 8 y 9" sabemos que no tenemos que cambiar el valor del conteo, asi que, en realidad no deberiamos de incluirlo en la sentencia "Switch" porque no tiene que haber ningun efecto sobre el conteo vamos a obviar esos casos, pero... En el otro caso, si tenemos que incluir estos valores 10, J, Q, K, A, en cualquiera de estos casos tenemos que reducir el valor del conteo en 1, asi que vamos a implementar esto en Switch
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
        // Entonces que es lo que vamos hacer en estos casos, vamos a tomar el valor de la variable global "conteo" y lo vamos a disminuir en 1, es decir lo vamos a reducir en 1.
        // Tenemos la variable "Global" y la estamos modificando dentro de la funcion
    }

    // Aun nos queda la ultima parte de la funcion, debemos retornar una cadena a partir del valor de "conteo", la funcion debe retornar una cadena de caracteres con el conteo actual, es decir, tenemos que retornar ese conteo y tambien debemos incluir esta cadena, alguna de estas 2 "Apostar" si el conteo es "positivo" o "Esperar" si el conteo es CERO o es "Negativo".
    // Para escoger la cadena, como solo tenemos 2 opciones podemos usar un condicional
    if(conteo > 0){
        decision = "Apostar";
    } else{
        decision = "Esperar"
    }
    // Ya tenemos el valor de conteo y tenemos la desicion de "apostar" o "esperar", entonces ya lo unico que tenemos que hacer es retornar nuestro valor
    // ¿Cual debe ser el formato de esa cadena?, nos dicen que el conteo actual y la decision del jugador "apostar" o "esperar" deben estar separados por un espacio
    return conteo + " " + decision;
    // Y esta es la cadena que debemos retornar

    //return `${conteo} ${decision}` // con template literals
}

// Vamos a probar nuestra funcion con distintas cartas...
// Vamos a llamar a la funcion con distintos valores
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
// Tenemos 5 llamadas a la funcion... pero como la cadena se retorna de la funcion, tenemos que rodear estas llamadas con console.log()
// ------------------------------------------------------------------















// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------