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
    }
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







// ----------------
// ----------------
// ----------------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------