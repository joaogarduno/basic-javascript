// TEMA 78: Crear Objetos

// Los objetos nos permiten guardar una secuencia o un conjunto de propiedades que estan relacionadas con sus correspondientes valores.

// Por ejemplo, si nosotros queremos describir un perro especifico, una mascota especifica, digamos que queremos representar en nuestro programa las propiedades de nuestro perro, ese perro tiene varias propiedades.
// Esta combinacion de propiedades, como "nombre", "edad", "peso", "raza" y de valores que estan relacionados a esas propiedades, lo denominamos un objeto, que podemos usar en Javascript en nuestro programa
// Es como una forma de agruparlas todas bajo una misma estructura de datos, que, podemos usar y acceder a traves de esta variable
var miPerro = {
    "nombre": "Peluso",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};
// Podemos usar numeros como propiedades e incluso tambien podemos omitir tambien las comillas, si los nombres de las propiedades tienen una sola palabra, no teniendo ningun espacio.
// ----------------




// Otro ejemplo

// Tambien podemos utilizar numeros como propiedades
var miObjeto = {
    5: "cinco"
};
// Si el objeto tiene una propiedad que no es una cadena JavaScript las combierte automaticamente en cadenas de texto, asi que si no las rodeamos en comillas de igualforma van a ser comillas en la representacion interna del programa
// ------------------------------------------------------------------





// TEMA 79: Acceder a Propiedades: Notación de Punto

// Podemos acceder a las propiedades de un objeto usando algo que llamamos notacion de punto.

// Ejemplo
var miPerro = {
    "nombre": "Daysie",
    "edad": 5,
    "peso": 6,
    "raza": "Husky"
};
// Podemos acceder a las propiedades de ese objeto porque si no para que serian de utulidad en JavaScript, los objetos son muy utiles porque podemos acceder a sus propiedades

// Por ejemplo, si quisieramos trabajar con el "nombre" de este objeto que es "Daysie", podemos acceder a ese valor en nuestro programa usando la notacion de "punto", ¿Como accederiamos a esta propiedad? escribiendo el nombre de la variable que contiene al objeto "miPerro.nombre" despues del punto iria la propiedad a la que estaremos teniendo acceso
console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.raza);

// Asi es como accedemos a las propiedades de un objeto, recuerda con el nombre de la variable segido de un "punto" y luego el nombre de la "propiedad"
// ------------------------------------------------------------------





// TEMA 80: Acceder a Propiedades: Notación de Corchetes

// Notacion alternativa para acceder a las "propiedades" de un objeto.

// Primero definimos nuestro objeto y vamos asignarlo a la variable "miCuaderno", este objeto tendra las propiedades "color", "categoria", "numero de paginas", "numero de hojas"
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};
// Este es nuestro objeto, y como podemos notar en el nombre de las ultimas 2 "propiedades", "numero de paginas" y "numero de hojas" tenemos espacios, pero como se estan rodeando entre comillas podemos escribirlas, solo podemos omitir las comillas cuando el nombre tenga una sola palabra, si tiene mas de una palabra y hay espacio en ese nombre tenemos que rodearla entre comillas es obligatorio.
console.log(miCuaderno.color);

// Ahora vamos a utilizar la notación de corchetes, es una notacion que es equivalente, ya que normalmente utilizamos la notacion de punto, pero la "notación de corchetes" nos permite acceder a este tipo de propiedades que tienen "espacios", esas propiedades que tienen "espacios en su nombre", en ese caso es obligatorio, pero tambien podemos utilizarlas para acceder a cualquier propiedad digamos "color"
console.log(miCuaderno["color"]);
// ----------------




// OTRO EJEMPLO:

// Cuando utilizamos la notacion de corchetes, tenemos que escribir un par de corchetes y dentro de los corchetes el nombre de la propiedad rodeado por comillas, podemos acceder a cualquier propiedad digamos "numero de paginas"
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};

console.log(miCuaderno["numero de paginas"]);
// Y vemos en consola el valor de "200"
// ----------------




// OTRO EJEMPLO:

// Con notacion de "punto", esto daria un error, digamos que tratamos de acceder a esta propiedad con la notación de punto y veremos un error, ya que despues del primer espacio no se detecta como un solo nombre, normalmente lo que hacemos en ese caso es unir las palabras comenzando con mayusculas, como los nombres de las variables, en ese caso si podriamos usar "notación de punto" o "notación de corchetes" que es equivalente
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numeroDePaginas": 200,
    "numeroDeHojas": 100
};

console.log(miCuaderno.numeroDeHojas);

// Ahora como la "notacion de punto" es mas concisa y mas facil de leer normalmente utilizamos "notacion de punto", pero la "notacion de corchetes es muy util" tambien cuando necesitamos usar el valor de una variable
// ------------------------------------------------------------------





// TEMA 81: Acceder a Propiedades: Variables

// ¿Como podemos acceder a esos valores utilizando variables?

// ¿Como poder acceder a la propiedad de un objeto usando una variable?, en lugar de un valor que escribimos directamente entre corchetes vamos a usar una variable.

// Si definimos un objeto que represente los resultados de una competencia vamos asociar los numeros entre 1 y 4 del primero, segundo, tercero y cuarto lugar a el usuario correspondiente, digamos que es una competencia de programacion y los competidores se registraron con un nombre especifico de usuario

var resultado = {
    1: "beto234",
    2: "gino008",
    3: "pedro122",
    4: "malakias2998"
};

// Ahora si queremos acceder a alguno de esos resultados especificos alguno de esos valores especificos podriamos usar una "variable" llamada "posicion".
var posicion = 4;

// es decir, queremos acceder al usuario que estaba en la posicion 4, ¿Como podemos hacerlo?, podemos escribir el nombre del objeto, el nombre de la variable que contiene a ese objeto y entre corchetes pasamos en lugar del nombre de la propiedad el nombre de la variable "posicion" esto es equivalente a escibir simplemente 4, pero como estamos escribiendo una variable, podemos trabajar con esa variable en nuestro programa, y hacer que este acceso a esta propiedad sea mas flexible, es decir sea mas dinamico, porque este valor va a depender del valor de la variable, no es un valor fijo
console.log(resultado[posicion]);

// Entonces podemos entender que ese valor se esta usando como el valor de la propiedad, el nombre de la propiedad que tenemos aqui y eso nos da mucho mas flexibilidad, porque quizas esa variable este en un lugar especifico de tu programa y la uses muchas veces y se actualice en tu programa y luego cuando llegue al punto donde necesites acceder a esa propiedad ese resultado va a estar personalizado al valor actual de la variable

// Bien, ahora entendemos como acceder a propiedades de objetos usando una varible, esto no lo podemos hacer con la "notación de punto" solo con la notacion de corchetes, porque en la notacion de punto tenemos que escribir explicitamente el nombre de la propiedad, no podemos usar una variable.
// ------------------------------------------------------------------




// TEMA 82: Actualizar propiedades

// Ademas de crear un objeto en tu programa y acceder a sus propiedades tambien puedes actualizar el valor de esas propiedades para permitir que tu objeto cambie durante la ejecucion del programa.

// Ejemplo, en el cual crearemos un objeto que llamaremos "mochila", su color sera azul, su "tamaño" sera mediano, pero tambien podemos asignar otros tipos de datos, otras estructuras de datos que se identifican como "los valores de las propiedades" como una "botella de agua" y un "cuaderno", ese seria el contenido de la mochila
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

// Una vez que ya tenemos estas propiedades definidas en nuestro programa vamos acceder a ellas y vamos a tratar de actualizarlas.

// Para poder acceder a la propiedar color, escribimos el nombre de la variable "mochila" seguido de un punto y luego el nombre de la "propiedad" que en este caso es "color"
console.log(mochila.color); // Valor inicial de este resultado "azul"

// Pero luego digamos que queremos cambiar el color de nuestra mochila y para actualizar el valor de la propiedad lo que hacemos es escribir, el nombre de la variable que contiene o guarda al objeto, seguido de un punto, el nombre de la propiedad que queremos actualizar y luego le asignaremos un nuevo valor o un valor por el que sera reemplazado, en este caso sera una cadena de caracteres y sera "verde"
mochila.color = "verde";
// Y esto actualizara o cambiara el valor de "azul" a "verde" y lo comprobaremos mostrando el nuevo valor, imprimiendolo en consola.
console.log(mochila.color); // Valor cambiado por "verde"

// Entonces... inicialmente es "azul" y luego se reasigna o se cambia ese valor por "verde"
// Y asi es como se reasigna o se cambia el valor.
// ----------------



// OTRO EJEMPLO

// Tambien podemos trabajar con sus valores para modificarlos, por ejemplo:

// Si nosotros queremos agregar algo a la mochila, tendriamos que acceder al valor de la propiedad "contenido" asi que vamos a ver como podemos actualizar este valor, y podemos utilizar la notacion de punto, ejemplo "mochila.conenido"
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.contenido);
// Y con este "console" podemos ver el arreglo

// Ahora digamos que queremos agregar un "lapiz" a nuestra mochila ¿Cómo podemos hacerlo?, para eso necesitamos llamar al metodo "push()"
mochila.contenido.push("lápiz");
// Este metodo debemos recordarlo cuando trabajamos con arreglos y este metodo nos permite agregar un elemento al final del arreglo, asi que agregamos la cadena de caracteres que diga "lapiz"

// Y luego de eso vamos a volver a mostrar, el valor del "contenido" de la "mochila"
console.log(mochila.contenido);

// Ahora si quisieramos quitar un elemento de la lista utilizariamos el metodo "pop"
// ----------------



// OTRO EJEMPLO (continuando con el ejemplo anterior)

// Pero si quisieramos reasignar el contenido de esa propiedad completamente por otro arreglo completamente nuevo tambien podemos hacerlo. Igual que reasignamos el valor de otras propiedades y aisgnamos otro arreglo completamente nuevo
mochila.contenido = [];

// Y luego si mostramos esa propiedad
console.log(mochila.contenido);

// Ahora sabemos como actualizar las propiedades de un objeto

// Recordar que primero el nombre de la variable seguido de un "." (punto), el nombre de la "propiedad" y asignamos el valor correspondiente, tambien lo podemos hacer con notacion de corchetes en lugar de notacion de punto, podemos usar la notacion de corchetes y va a funcionar
// ------------------------------------------------------------------




// TEMA 83: Agregar propiedades

// Tambien puedes agregar nuevas propiedades a un objeto en Javascript veamos un ejemplo. 

// Tendremos un objeto que va a representar un curso, el curso tendra un "titulo", tambien podemos especificar el idioma del curso y tambien tendriamos la "duracion" digamos que es un curso de 30min o 30 horas dependiendo el estandar que ocupemos para este valor.
var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
};
// Entonces... tenemos un objeto con 3 propiedades, ahora como podemos añadir una 4° propiedad y esa propiedad se llamara "vistas", sera el numero de vistas que ha tenido ese curso desde que se publico, la sintaxis es exactamente la misma que ocupamos para actualizar el valor de una propiedad, pero en este caso vamos a escribir el nombre de la propiedad que queremos agregar, el nombre de la variable, seguida de un punto, el nombre de la propiedad nueva y luego el valor que queremos asignar...
curso.visitas = 34500;

// Aqui tenemos nuestra propiedad nueva que podemos comprobar mostrandola en la consola
console.log(curso.visitas);


// ahora si hubieramos intentado acceder a esta propiedad de "visitas" antes de crearla, el resultado seria "undefined" y esto es muy importante que lo sepas tambien.

// Si intentas acceder a una propiedad que no existe en un objeto, en ese momento en particular del programa el resultado o el valor que se va a reetornar es "undefined" y por eso tambien es bueno verificar que el valor sea "undefined" cuando estas trabajando con propiedades.
// ----------------



// OTRO EJEMPLO

// Ahora debemos preguntarnos si podemos hacer esto mismo con "Notacion de corchetes".
var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
};

// Si usamos notacion de corchetes para crear la propiedad vistas y luego intentamos acceder a ella aqui podemos ver el valor
curso["vistas"] = 34500;

console.log(curso.vistas);

// Ahora sabemos agregar propiedades nuevas a un objeto
// ------------------------------------------------------------------




// TEMA 84: Eliminar Propiedades

// Ahora vamos a ver como poder eliminar una propiedad de un objeto en javascript, la palabra clave aqui es "delete" que significa eleminar o borrar en español y veamos como la podemos usar.

var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
};

// Si queremos borrar la propiedad "duracion", es decir ya no queremos tener un registro de la duracion del curso, tenemos que escribir la palabra clave "delete", seguida del nombre del objeto, es decir el nombre de la variable que contiene el objeto, luego un punto y el nombre de la propiedad.

// Y como vemos que realmente se elimino esa propiedad del objeto curso, bueno primero imprimimos en consola la "duracion" antes de ser eliminada
console.log(curso.duracion); // 30

delete curso.duracion;

// Imprimimos despues en consola para verificar que si fue fue eliminada.
console.log(curso.duracion); // undefined

// Y eso es todo lo que tenemos que hacer para borrar esa propiedad

// Ahora si cambiamos una linea de codigo que nos muestre el objeto completo y vemos que ya no tiene la propiedad duracion luego de que la borramos con "delete"
console.log(curso);
// ----------------



// OTRO EJEMPLO:

// Ahora vamos a ver como podemos hacer esto con otra propiedad

var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
};

// Digamos que queremos borrar la propiedad idioma, inicialmente ese valor sera español, pero luego de borrarla tendriamos que actualizar aqui el nombre de la propiedad
console.log(curso.idioma) // Español

delete curso.idioma;

console.log(curso.idioma); // undefined
// ------------------------------------------------------------------




// TEMA 85: Objetos para busquedas

// Ahora vamos a ver como podemos usar un objeto para reemplazar una sentencia Switch con la estructura que tenemos a continuación, analicemos el codigo y luego lo modificaremos...

// tenemos una funcion que se llama "buscarElementoQuimico" que va a tomar el simbolo del elemento quimico como argumento y a partir de ese simbolo va a retornar el nombre completo del elemento químico.

// Lo que estamos haciendo, basicamente es una asociacion de entre dos valores, en este caso y para esta sentencia Switch especifica.

// Cuando tienes una sentencia Switch con esta estructura que asocia 2 valores facilmente podemos escribir codigo mas conciso con un objeto
// Recueda que los objetos nos permite asociar una propiedad con su valor

// En este caso vamos a crear un objeto que asocie los simbolos químicos con sus elementos químicos correspondientes

function buscarElementoQuimico(simbolo){
    // No necesitamos esta variable
    // var elementoQuimico = "";

    // Las propiedades de este objeto seran los simbolos químicos y vamos a usar esas propiedades para acceder a sus valores correspondientes que seran los nombres completos de los elementos químicos
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    // Estamos reestructurando nuestro codigo de una forma especifica para poder realizar exactamente lo mismo que tenemos en Switch pero de forma mas concisa.
    // Logramos asociar cada simbolo con su elemento químico correspondiente

    // El unico cambio que nos falta por hacer es acceder al simbolo químico para obtener su valor correspondiente, es decir acceder a esa propiedad


    // Tenemos la sentencia Switch como referencia
    // switch (simbolo){
    //     case "Al":
    //         elementoQuimico = "Aluminio";
    //         break;
    //     case "S":
    //         elementoQuimico = "Azufre";
    //         break;
    //     case "Cl":
    //         elementoQuimico = "Cloro";
    //         break;
    //     case "He":
    //         elementoQuimico = "Helio";
    //         break;
    //     case "B":
    //         elementoQuimico = "Boro";
    //         break;
    //     case "Li":
    //         elementoQuimico = "Litio";
    //         break;
    // }

    // Simplemente retornamos el nombre de este objeto
    // Podemos acceder a sus propiedad con "notacion de corchetes" y pasar el valor de la variable "simbolo" de la variable
    return simbolosQuimicos[simbolo];
    // Esto nos retornara el valor asociado a ese simbolo, el nombre completo del elemento químico, asi que este sera el nombre completo del elemento químico y el valor se va a retornar exactamente como lo queriamos

}

// De esta forma podemos ver como nuestro codigo es mucho mas conciso si lo modificamos para trabajar con un objeto en lugar de utilizar un Switch en este caso.

// Ahora veamos cada uno de los posibles casos para confirmar que retorna el valor apropiado
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

// Asi la funcion retorna los valores que esperabamos y tenemos codigo mucho mas conciso simplemente usando un OBJETO para asociar una propiedad a su valor correspondiente.

// Ahora sabemos como usar objetos para escribir codigo mas conciso en casos como este, en el cual necesitamos asociar propiedades a valores.
// ------------------------------------------------------------------




// TEMA 86: Verificar Propiedades

// Otra operacion muy importante que debemos aprender a realizar con un objeto, es verificar si ese objeto tiene una "propiedad" o no, recuerda que en el tema anterior vimos que despues de borrar una propiedad, cuando ese objeto ya no tiene esa propiedad, el resultado retornado si es que intentamos acceder a ella es "undefined", pero para ello podemos verificar si la propiedad existe o no antes de usarla, ¿y como podemos verificar eso?
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

// Para verificar si el objeto tiene o no una "propiedad" especifica, escribimos el "nombre del objeto" ó el "nombre de la variable", y luego escribimos, por ejemplo, "hasOwnProperty", esta palabra "hasOwnProperty" la podemos traducir como "tiene esta propiedad" que especificamos entre parentesis, digamos que la propiedad es color (en este caso el objeto si tiene la propiedad color)

// Para mostrar el resultado en consola:
console.log(miCuaderno.hasOwnProperty("color")); // TRUE

// Entonces, estamos preguntando si este objeto que tenemos aqui tiene la propiedad que vamos a especificar entre parentesis "color", en este caso este OBJETO si tiene la PROPIEDAD "color", asi que el resultado sera "TRUE", por la llamada al metodo y la propiedad si existe.

// Este metodo "hasOwnProperty" es muy util cuado estamos trabajando con un condicional, en un condicional podemos escribir esto como la condicion y si el objeto tiene esa propiedad la condicion sera VERDADERA y si no la condicion sera FALSA
// ----------------



// OTRO EJEMPLO:

// Ahora veamos que ocurre si intentamos verificar una propiedad que no existe en el objeto digamos "origen" como el país de origen.
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("origen")); // FALSE
// Este resultado seria FALSE porque el OBJETO "miCuaderno" no tiene una "propiedad" llamada "origen", si lo verificamos en consola veremos el resultado sera FALSE ya que esta propiedad no existe en el objeto
// ----------------



// OTRO EJEMPLO:

// Para mostrar que este OBJETO -> "hasOwnProperty" es muy util en un condicional vamos a crear o definir una función
// Esa funcion va a verificar si un obejeto tiene una propiedad o no y va a mostrar un mensaje adecuado, va a tomar 2 parametros el "objeto" y la "propiedad"
function verificarPropiedad(obj, propiedad){
    // Y decimos, si esta condicion es verdadera, es decir si el OBJETO tiene la propiedad que especificamos como parametro, entonces ¿que es lo que vamos a retornar aqui?, una cadena que va a ser la union de esta cadena con el valor de la propiedad en ese objeto
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad]; // este valor no sera "undefined" porque la condicion fue verdadera, es decir que el objeto tiene esa propiedad que especificamos y podemos trabajar con ella de forma segura sabiendo que no sera "undefined".
    } else{
        // Si no, si el objeto no tiene la propiedad vamos a retornar esta cadena de caracteres
        return "El objeto no tiene esta propiedad";
    }
}
// Y esto es basicamente nuestra función

// Creamos o pasamos nuestro objeto
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

// probamos, vamos a verificar si mi objeto "miCuaderno" tiene la propiedad "color"
console.log(verificarPropiedad(miCuaderno, "color"));
// Y como resultado nos dice que, si tiene la "propiedad" "color" porque en consola nos muestra su valor, el valor de esa propiedad es "verde".
// La condicion fue verdadera y aqui se reemplazo el valor de la propiedad
// ----------------



// OTRO EJEMPLO:

// Ahora si tratamos de pasar una propiedad que no existe, por ejemplo "origen"...

// FUNCIÓN
function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    } else{
        return "El objeto no tiene esta propiedad";
    }
}

// OBJETO
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

// CONSOLE
console.log(verificarPropiedad(miCuaderno, "origen"));

// En este caso la condicion fue falsa asi que pasamos a la clausula "else" y nos retorno en consola la cadena de caracteres "El objeto no tiene esta propiedad"


// Bien, ahora sabemos como utilizar este METODO "hasOwnProperty" en un condicional y de forma independiente para verificar si un objeto tiene una propiedad o no, esto es muy util a medida que trabajemos con los objetos porque nos garantiza que cuando tratemos de acceder a una propiedad el valor no sera "undefined".

// Vamos a aprender a manipular objetos mas complejos, son el tipo de objetos que trabajariamos por ejemplo, en desarrollo web
// ------------------------------------------------------------------




// TEMA 87: Objetos Complejos

// Ya sabemos como trabajar con objetos en Javascript y todas sus operaciones principales, asi que empezaremos a trabajar con objetos mas complejos
// Estos tienen combinaciones de distintos tipos de datos como sus valores, los valores de las propiedades y podemos ver que la variable "ordenesDePizzas" contiene un arreglo y lo sabemos por que vemos los corchetes abriendo y cerrando el arreglo.
// Esto nos dice que es un arreglo de objetos, porque aqui tenemos las llaves "{}" que abren y cierran el objeto y dentro de cada objeto que tenemos aqui en nuestro arreglo tenemos secuencias de propiedades y sus valores que siguen un formato muy similar, las mismas propiedades asociadas a disntintos valores.

// Esto es un formato que normalmente se utiliza o es muy similar JSON, asi que si en algun momento planeas aprender desarrollo web, aprender a manipular este tipo de objetos es vital, veamos como lo podemos hacer.

// Primero que todo, lo escencial que debemos entender es que estamos trabajando con un arreglo asi que cad uno de estos objetos tiene un lugar en ese arreglo como si fuera un elemento, como si tuvieramos un arreglo con 2 cadenas de caracteres o 2 numeros, pero en este caso tenemos 2 objetos.
// Luego cada objeto tiene su conjunto de propiedades y los valores de esas propiedades.
// Los 2 objetos tienen las mismas propiedades, pero sus valores son distintos, entendemos con estos 2 objetos que podemos mezclar valores de distintos tipos, no es necesariamnete todos los valores tienen que ser del mismo tipo de dato.

// Luego tenemos los "toppings" los "toppings" estan representados como otro arreglo, asi es, aunque paresca raro, tenemos 1 arreglo externo que contiene a los objetos, luego tenemos al objeto y dentro del objeto tenemos otro arreglo, como el valor de una propiedad, con este ejemplo puedes ver que los objetos son muy versatiles y podemos trabajar con ellos para representar practicamente cualquier dato que necesitemos.
// Aquí representamos los "topping" con un arreglo porque necesitamos varios elementos, porque el cliente pude pedir mas de un "topping", luego "paraLlevar" es un valor booleano, VERDADERO si la pizza se ordeno para llevar o FALSO si la pizza se ordeno para comer en el lugar. Toda la data que necesitamos de la pizza esta representada en estos objetos para cada una de las ordenes.

// ¿Como podemos acceder a estos objetos? vamos a trabajar con "console.log" la estructura de datos principal que contiene los objetos es un "arreglo", ese arreglo tiene las mismas propiedades que aprendiste cuando empezamos a trabajar con arreglos, el primer objeto o el primer elemento esta en el indice 0, el segundo objeto esta en el indice 1 y los objetos estan separados con una "coma" (,) ya que esto es muy importante que lo identifiquemos.
// Cuando los objetos son parte de un arreglo tambien hay que separarlos con "coma" (,) porque son elementos distintos del arreglo
var ordenesDePizzas = [
    // objeto 1
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    // objeto 2
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    }
];
// Entonces, para acceder al primer objeto usamos el indice 0, el nombre de la variable y el indice 0, este indice 0 nos va a retornar el primer objeto y tambien si queremos el segundo objeto podemos cambiar el indice 0 por el indice 1 y seria este objeto el resultado 
console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);
// Y como resultado podemos ver el primer objeto: "tipo", "tamaño", "precio", "toppings" y "paraLlevar"
// Y luego nos muestra otro objeto: "tipo", "tamaño", "precio", "toppings" y "paraLlevar"
// Accededimos al primer objeto primero y luego al segundo objeto con su indice correspondiente
// ----------------




// OTRO EJEMPLO:
// Ahora digamos que queremos acceder al tipo de pizza que corresponde al primer objeto, digamos que queremos saber si esa pizza es "margarita" o cualquier otro tipo de pizza, solo la del "tipo" del primer objeto, ¿como lo podemos hacer? vamos a trabajar solo con la del primero objeto y luego podemos replicarlo para elsegundo objeto, simplemente cambiando el indice de 0 a 1.
var ordenesDePizzas = [
    // objeto 1
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    // objeto 2
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    }
];
// Para acceder a esa propiedad usamos notacion de punto, aunque tambien podemos usar notacion de corchetes
console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[1].tipo);
// Accedemos al primer objeto y luego accedemos a su propiedad tipos eso nos deberia retornar el valor "margarita", asi que fue el primer "tipo" del primer objeto, es decir de la primera orden de pizza.
// ----------------




// OTRO EJEMPLO:
// Ahora si quiseramos usar en lugar de notacion de punto, utilizamos notacion de corchetes tambien lo podemos hacer con "comillas"
var ordenesDePizzas = [
    // objeto 1
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    // objeto 2
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    }
];
console.log(ordenesDePizzas[0]["tipo"]);
console.log(ordenesDePizzas[1]["tipo"]);

// Y asi tambien podemos acceder a cualquier otra "propiedad" 
console.log(ordenesDePizzas[0]["precio"]);

// Tambien si queremos acceder a la lista de "toppings" tambien podemos haerlo
console.log(ordenesDePizzas[0]["toppings"]);
// "toppings" del segundo objeto simplemente cambiamos el indice a 1
console.log(ordenesDePizzas[1]["toppings"]);
// ----------------




// OTRO EJEMPLO:
// Ahora vamos a ver como podemos agregar una 3° orden de pizza a este objeto, recuerda que siempre tenemos que separar los objetos con una "coma" (,) cuando estan contenidos en un arreglo, es decir cuando son parte de un arreglo, asi que agregamos una "coma" y luego en la siguiente linea colocamos un par de llaves.
// Normalmente el editor de codigo que estemos usando va alinear las llaves practicamente y podemos comenzar a escribir nuestro codigo
var ordenesDePizzas = [
    // objeto 1
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    // objeto 2
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    },
    // objeto 3
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [], // Lista vacia
        "paraLlevar": true
    }
];
// Ya tenemos un 3° objeto en nuestro arreglo podemos acceder a el con el indice 2 ya que es el 3° elemento de nuestro arreglo

// Bien ahora sabemos como trabajar con este objeto que es un poco mas complejo en su estructura simplemente accedes al objeto que corresponde y luego accedes a su propiedad
// ------------------------------------------------------------------




// TEMA 88: Objetos Anidados

// En el tema anterios descrubimos como podemos trabajar con objetos mas complejos, es decir, con una estructura mas elaborada, pero en este tema vamos a hablar sobre los "objetos anidados"

// Los "objetos anidados" son objetos contenidos dentro de otros objetos, esto te debe sonar familiar, ya que es parecido al concepto de un array o arreglo anidado, que es un arreglo dentro de un arreglo.
// En este caso tenemos un objeto dentro de otro objeto, en este ejemplo estoy indentando el codigo con 4 espacios para poder ver mejor la estructura del objeto, en Javascript puedes indentar tu codigo con 2 o 4 espacios, lo importante es mantener la consistencia en todo el codigo del programa

// Analicemos la estructura de este objeto, tenemos un objeto principal que esta asignado a la variable "miReceta", ese objeto principal tiene 3 propiedades: "descripcion", "costo" e "ingredientes", pero nosostros nos vamos a centrar en la propiedad que tenemos("masa" y "cobertura"), el cual cuyo valor es un objeto, esto es ya un objeto anidado, es decir es un objeto dentro de un objeto, esas propiedades de "masa" y "cobertura" que a su vez tienen otros objetos como "propiedades", asi que tenemos una estructura mucho mas elebaorada con distintos niveles de objetos anidados, vamos a ver como poder acceder a sus elementos, por ejemplo, si queremos acceder al valor de "1 cucharadita" o al valor "120 grs" ¿Cómo podemos hacerlo?
var miReceta = {
    "descripcion": " mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

// Iniciamos accediendo a las "propiedades" principales del objeto mi receta, "descripcion", "costo" e "ingredientes", recuerda que primero escribimos el nombre de la variable y luego el nombre de la propiedad.
console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);
// En "ingredientes", que es la parte clave de este ejemplo, es que tenemos un objeto, es un "objeto anidado", que correspode a la propiedad "ingredientes", ahora lo que haremos es que vamos a trabajar solo con esta propiedad.
// ----------------




// OTRO EJEMPLO:

// Ya que sabemos con que objeto vamos a trabajar, que sera "ingredientes", pero digamos que queremos acceder a los ingredientes necesarios para crear la masa de la receta, ¿como podemos hacerlo utilizando notacion de punto?.

var miReceta = {
    "descripcion": " mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

// Escribimos la pripiedad que queremos acceder, y notamos como estamos creando un camino, de "miReceta", vamos a "ingredientes" que es la propiedad del objeto y luego vamos a la siguiente propiedad del objeto anidado que es "masa", si verificamos el valor en la consola, podemos ver que es el objeto que corresponde a "masa": "harina", "sal" y "agua" y asi es como vemos el objeto que corresponde a "masa".
console.log(miReceta.ingredientes.masa);

// Ya estamos adentrandonos en la estructura del objeto
// ----------------




// OTRO EJEMPLO:

var miReceta = {
  "descripcion": " mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
      "masa": {
          "harina": "100 grs",
          "sal": "1 cucharadita",
          "agua": "1 taza"
      },
      "cobertura": {
          "azucar": "120 grs",
          "chocolate": "4 cucharadas",
          "mantequilla": "200 grs"
      }
  }
};
// Una vez que tenemos ese objeto, que corresponde a "masa" podemos seguir adentrandonos aun mas, podemos acceder al valor de "harina", de "sal" y de "agua" para saber cuanto necesitamos de cada uno.
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);
// Podemos ver los valores de cada una de estas propiedades.
// ----------------




// Otro ejemplo:

// Hasta ahora estamos utilizando la notacion de punto, pero tambien podemos utilizar la notacion de corchetes, en ese caso lo unico que tenemos que hacer es reemplazar ese punto por un par de corchetes, y escribir la propiedad entre comillas dentro de los corchetes y el resultado sera exactamente igual

var miReceta = {
  "descripcion": " mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
      "masa": {
          "harina": "100 grs",
          "sal": "1 cucharadita",
          "agua": "1 taza"
      },
      "cobertura": {
          "azucar": "120 grs",
          "chocolate": "4 cucharadas",
          "mantequilla": "200 grs"
      }
  }
};

// 
console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

// La ventaja de utilizar notacion de corchetes es que podemos escribir dentro de los corchetes una "variable", asi que podrias personalizar los valores que accedemos, dependiendo del valor de una variable.
// Esto es muy util por ejemplo si estamos interactuando con el usuario y el usuario escoge una opcion, es decir si quiere la cantidad de harina, la cantidad de azucar, la cantidad de chocolate, es asi como podemos personalizar todo ese camino o recorrido que nos lleva a ese valor con esas variables.
// Pero solamente es obligatorio la notacion de corchetes cuando el nombre de la propiedad tiene un espacio y si necesitas utilizar una variable si necesitas utilizar la notacion de corchetes.
// ----------------




// Otro ejemplo:

// Veamos como podemos acceder a los elementos de la "cobertura" en lugar de la "masa"
var miReceta = {
  "descripcion": " mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
      "masa": {
          "harina": "100 grs",
          "sal": "1 cucharadita",
          "agua": "1 taza"
      },
      "cobertura": {
          "azucar": "120 grs",
          "chocolate": "4 cucharadas",
          "mantequilla": "200 grs"
      }
  }
};

// 
console.log(miReceta.ingredientes.cobertura);
// Una vez que tenemos el objeto podemos acceder a sus valores y lo haremos con notacion de punto

// Cada una de estas lineas nos retorna el valor de la propiedad especifica
console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
// Ya sabemos con utilizar la notacion de punto.
// Podemos ver como estamos trazando un camino y vamos a ir paso por paso en este camino, comenzamos con el nombre de la variable que contiene el objeto proncipal, luego entramos a ingredientes que es la propiedad que queremos acceder, luego en cada uno de esos "ingredientes" ingresamos a un ingrediente en especifico como "cobertura" y asi es como vamos trazando el camino de los objetos y vamos mas adentro de la estructura de afuera hacia adentro, entonces despues de "cobertura" entramos a la propiedad que corresponde "Azucar", "chocolate" "mantequilla" y poder llegar a sus valores.

// Podemos detenernos en cualquier punto del camino, por ejemplo si solo queremos acceder el objeto "cobertura", podemos acceder al objeto sin acceder a ninguna de sus propiedades, o podemos seguir adentrandonos en su estructura con notacion de puntos y tambien podemo utilizar notacion de corchetes, en cualquier punto de este camino
console.log(miReceta.ingredientes["cobertura"].azucar);
console.log(miReceta.ingredientes["cobertura"].chocolate);
console.log(miReceta.ingredientes["cobertura"].mantequilla);
// Esto es muy util queremos reemplazar el valor de una variable para cambiar el resultado dependiendo del valor de la variable, ahora sabemos como acceder a cada uno de estos elementos

// Es muy importante saber trabajar con "objetos anidados" ya que esta estructura es muy importante para el formato "JSON" (JavaScript Object Notation), es un formato que es muy utilizado en desarrollo web.
// ------------------------------------------------------------------




// Tema 89: Arreglos Anidados
// Tambien podemos acceder a Arreglos Anidados que son arreglos que se encuentran dentro de estructuras mas complejas, como por ejemplo dentro de un objeto y es parte de un arreglo, veamos como poder acceder a sus elementos.

// Un arreglo que va a tener 2 objetos con listas de plantas, en este caso la primera propiedad seria "tipo", "lista", 
var misPlantas = [
    // PRIMER OBJETO EN EL ARREGLO
    // indice 0
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },

    // SEGUNDO OBJETO EN EL ARREGLO
    // indice 1
    {
        tipo: "árboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];
// Con esto ya tenemos nuestro arreglo de objetos, estos arreglos mas pequeños que tenemos dentro, a eso se le conoce o se les llama como arreglos anidados, es decir los arreglos son parte de un objeto y asu vez ese objeto es parte de otro arreglo, entonces la sintaxis que debemos usar para acceder a sus elementos individuales es distinta, vamos a ver como podemos acceder a esos elementos.

// acceder a la primera flor de la estructura
// Recuerda que la estructura principal que tiene nuestro objeto es los arreglos
// Cada objeto es un elemento de ese arreglo
// Entonces si queremos navegar através de estos debemos hacer con los index o su indice que la primera parte por ejemplo pertenece a "indice 0"
var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

// accedemos al segundo objeto en el arreglo
var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);
// ------------------------------------------------------------------





// Tema 90 - Proyecto: Colección de Discos

// Es es un mini proyecto y esta enfocado en actualizar una coleccion de discos, vamos a practicar conocimiento de objetos, condicionales, como acceder a actualizar y eliminar las propiedades de un objeto y mucho más.

/* 
  Tenemos un objeto que representa parte de una colección de albumes musicales.
  Cada album tiene un número de indetificación único (id) asociado a otras propiedades.
  
  No todos los albumes tienen la información completa.
*/

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: 'Bee Gees Greatest',
    artista: 'Bee Gees',
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: 'ABBA Gold'
  }
};

// Actividad
/*
  Define una funcion actualizarDiscos que tome los siguientes parámetros:
  - discos (el objeto que representa la coleccion de discos).
  - id
  - Propiedad ("artista" o "canciones").
  - Valor.

  Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:

  - Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

  - Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.
  
  - Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.

  - Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad.
  Si la propiedad no existe, debes crearla y asignar este valor.


*/

// Primero definimos la funcion
// Tendra 4 parametros "discos", "id", "propiedad" y "valor", para implementar la primera regla tenemos que confirmar si el valor del parametro "valor" es una cadena vacia
function actualizarDiscos(discos, id, propiedad, valor) {
  if(valor === ""){
    delete discos [id][propiedad];
  } else if(propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else{
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

// Manda a llamar la funcion con sus argumentos
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
// Primero accedemos al objeto que contiene los álbumes, en este caso "discos", tambien la podemos llamar coleccion, luego con conotacion de corchetes estamos accediendo al ID del album a partir de su ID (de su numero de identificacion unico), eso nos retornara el objeto anidado que corresponde al "album", por ejemplo si el ID es el "7853", todo el contenido de eso seria el objeto anidado eso es lo que obtendriammos con la primera notacion de corchetes y luego accedemos a la propiedad que especificamos como argumento, artista o canciones o cualquier otra propiedad.

// En este caso accederemos a esa propiedad y la eliminaremos, con esto ya tenemos la primera regla implementada
// ----------------





// OTRO EJEMPLO
// Ahora nos vamos con el siguiente propiedad del objeto:

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: 'Bee Gees Greatest',
    artista: 'Bee Gees',
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: 'ABBA Gold'
  }
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if(valor === ""){
    delete discos [id][propiedad];
  } else if(propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else{
    discos[id][propiedad] = valor;
  }
}

// Ahora nos vamos con el siguiente propiedad del objeto:
console.log(coleccionDeDiscos[5439].canciones);

// Manda a llamar la funcion con sus argumentos
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");

console.log(coleccionDeDiscos[5439].canciones);
// ----------------





// OTRO EJEMPLO
// Asignar el artista que sera el grupo ABBA

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: 'Bee Gees Greatest',
    artista: 'Bee Gees',
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: 'ABBA Gold'
  }
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if(valor === ""){
    delete discos [id][propiedad];
  } else if(propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else{
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[5439].artista);

// Manda a llamar la funcion con sus argumentos
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");

console.log(coleccionDeDiscos[5439].artista);

// Practicamos como trabajar con:
/*

- funciones.
- parametros.
- argumentos.
- condicionales como eliminar una propiedad de un objeto.
- Como acceder a una propiedad.

Aprendimos una nueva sintaxis la parte de "discos[id][propiedad] = discos[id][propiedad] || []", que nos permite asignar un valor que sirva como respaldo su el valor anterior es "undefined"
// Y trabajamos tambien con todas las clausulas if, else if y else.
*/
// ------------------------------------------------------------------




// 
// Tema 91: Ciclo While

// ya sabemos como trabajar con objetos en JavaScript ya que es un tema muy importante, pero vamos a pasar a otro aspecto del lenguaje de programacion que nos va a permitir escribir programas muy poderosos, mucho mas poderosos de los que hemos escrito hasta ahora, y estos son los ciclos o bucles.

// Los ciclos o bucles nos permiten repetir, una secuencia de instrucciones un numero especifico de veces tenemos 2 tipos de ciclos:

// Ciclos o bucles "while" y ciclos o bucles "for"

// En español traducimos el termino a ciclo o bucle se usan de forma equivalente en ingles el termino original se denomina "loop"

// CICLO WHILE
// Los ciclos "while" se usan cuando no tenemos un numero especifico de iteraciones.

// ¿QUÉ ES UNA ITERACION?
// Una iteracion es una repeticion del bloque de codigo que queremos repetir, cuando no sabemos el numero especifico de iteraciones que queremos realizar, pero si sabemos que es lo que tiene que ser cierto para continuar el proceso usamos un ciclo "while"

// ¿Cómo mostrariamos un mensaje 3, 4 o 5 o 6 veces en la consola?, por ejemplo el siguiente mensaje hola "mundo", y lo que realmente hariamos es escribir solo "console.log("Hola , Mundo") repitiendolo tantas vaces sea necesario o las veces que quieres mostrar el mensaje, pero nos daremos cuenta que eso no es practico, ya que si quisieramos repetir el mensajae 20 veces tendriamos que tener 20 líneas de "console.log("Hola, mundo"), algo tan sencillo como esto hacer un tarea repetitiva no nos deberia tomar tantas lineaas de codigo y sera que nuestro codigo sea imposible de leer e ineficiente para escribir, imagina aquellos programas mas complejos que controlan funciones muchisimo mas complejas, para eso, para evitarnos tanto problema de repetir codigo tenemos los cilos "while", nos permiten ese codigo simplemente con una estructura especifica y repetirlo

// Recordar que los ciclos while nos permiten escribir ese codigo simplemente con una estructura especifica y repetirlo

// definimos una variable

var i = 0;

//  tenemos que escribir la condicion que tiene que ser verdadera para poder continuar
while(i <= 200){
    console.log('perrito');
    i++;
}

// Gracias a los cilos podemos escribiir programas mucho mas poderosos
// ----------------





// OTRO EJEMPLO:

// CICLO WHILE
var miArreglo = [];
var i = 0;

console.log(miArreglo);

// Queremos agregar los numeros entre 0 y 9 a este arreglo, ¿Cómo lo podemos hacer? lo podemos hacer con un ciclo "while"
while(i <= 10){
    // ¿Qué queremos hacer?, lo que intentamos hacer es agregar ese valor al arreglo
    miArreglo.push(i);
    i++;

}

console.log(miArreglo);
// ----------------





// OTRO EJEMPLO:

// 

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

// USamos un ciclo "while " para quitarle cierte numeros de ese arreglo, en la condicion podemos usar, la loguitud o el tamaño del arreglo
while(numeros.length > 4){
    numeros.pop();
}

console.log(numeros);
// con este console.log podemos ver que lo unica que nos imprime es hasta ese numero de longitud con el metodo "pop()"

// Esto es solo una introduccion ciclo while en JavaScript, y es muy importante recordar actualizar las variables, para que la condicion en algun momento sea falsa, si esta condicion nunca es falsa el proceso en teoria nunca se va a detener
// ------------------------------------------------------------------








// Tema 92: CICLO For

// Ahora veremos el ciclo o bucle "for" en JavaScript y veremos como funciona.

// usamos el ciclo "for" cuando sabemos cuantas iteraciones van a ser necesarias y el ciclo "for" nos actualiza esa variable que antes teniamos que actualizarla nosotros mismo, con el ciclo "while" la actualiza automaticamente.

// Vamos hacer algo que es equivalente a lo que hicimos con el ciclo "while", agregar los numeros del 0 hasta el 9 a un arreglo, pero con el cliclo "for", la forma de escribir codigo es una forma un poco diferente

var miArreglo = [];

// inicializar una variable, a esto se le llama la "vaariable del ciclo" en ingles "loop variable", es decir, "la variable del ciclo" esta variable es la que va a decidir si se sigue ejecuando o no
// Despues tenemos la condicion que decide que mientras i sea < menor que 10 el ciclo va a continuar
// depues tenemos que decirle a JavaScript como queremos actualizar esa variable en cada iteracion, por ejemplo si queremos incrementar el valor de i en 1, escribimos i++, entonces eso es lo que basicamente se tiene aqui en el ciclo "for"
for(var i = 0; i < 10; i++){
    // vamos añadir el valor de I al arreglo
    miArreglo.push(i);
}

console.log(miArreglo);
// Entonces esto es semejante al ejemplo anterior con el ciclo "while", pero la ventaja que tienen los ciclo "for" es que podemos especificar todas las condiciones importantes para el ciclo, tenemos el valor inicial de la variable del ciclo, tenemos la condicion y tiene que ser verdadera para que el ciclo continue ejecutandose y tambien tenemos aqui lo que queremos hacer con esa variable cada ves quecomience la iteracion o cada vez que temine una iteracion que es iquivalente.
// ----------------






// OTRO EJEMPLO

// En este caso queremos incrementar el  valor de i en 1 pero no necesariamente tenemos que incrementar ese valor de uno en un uno, se puede incrementar en otro valor, en ese caso se tendria que hacer de la siguiente manera:
var miArreglo = [];

for (var i = 0; i < 10; i = i + 2){
    miArreglo.push(i);
}

console.log(miArreglo);

// Tambien podemos utilizar el operador de incremento de la siguiente manera "i += 2", es decir...
// for (var i = 0; i < 10; i += 2){}
// ------------------------------------------------------------------





// TEMA 93: Ciclos "for": Numeros impares

// declaramos el arreglo en JavaScript ya que vamos a guardar los numero  impares en ese arreglo, vamos a tener los impares entre 1 y 19, pero, ¿Cómo lo podemos hacer con un ciclo FOR?
var miArreglo = [];

for(var i = 1; i < 50; i += 2){
    miArreglo.push(i);
}

console.log(miArreglo);
// Este ciclo nos muestra los numeros impares

// Con estos ciclos nos permite realizar operaciones mas complejas sin escribir mas lineas de codigo
// Tambien podemos realizar procesos mas eficientes
// ----------------




// OTRO EJEMPLO

// Numeros pares
let otroArreglo = [];

for(var i = 2; i <= 30; i += 2){
    otroArreglo.push(i);
}

console.log(otroArreglo);
// ------------------------------------------------------------------



// // TEMA 94: Ciclos "for": Contar Hacia Atras

// Tambien podemos contar hacia atras con un cilo o bucle "for".

// Hasta ahora hem,os incrementado el valor de "i" que es la variable del ciclo, pero ahora tambien podemos reducir su valor, veamos como podemos hacerlo.
for(var i = 15; i >= 10; i--){
  console.log(i);
}


// Tambien podemos reducir de 2 en 2
for(var i = 15; i >= 10; i-=2){
  console.log(i);
}
// Si nos damos cuenta vemos que podemos modificar el valor de "i" como queramos, ya que incluso se pude multiplicar  por 2 o dividirlo entre 2
// ----------------




// OTRO EJEMPLO:

// Vamos a ver un ejemplo con el arreglo 
// A este arreglo le vamos a incluir ciertos valores, pero ¿Qué tipo de valores?, el valor inicial de "i" sera "10" y queremos continuar el proceso mientras "i" sea mayor que 0
var miArreglo = [];

for(var i = 10; i > 0; i -= 2){
  miArreglo.push(i);
}

console.log(miArreglo);
// Se va reduciendo de 2 en 2










// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------