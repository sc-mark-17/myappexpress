/*Las primeras dos líneas incluyen (mediante la orden require())
el módulo de Express y crean una aplicación de Express. Este elemento
se denomina comúnmente app, y posee métodos para el enrutamiento de
las peticiones HTTP, configuración del 'middleware', y visualización
de las vistas de HTML, uso del motores de 'templates', y gestión de
las configuraciones de las aplicaciones  que controlan la aplicación
(por ejemplo el entorno, las definiciones para enrutado ... etcetera.)*/
var express = require('express');//carga modulos o librerias mediante require
var app = express();//se invoca el objeto obtenido

// Las líneas que siguen en el código (las tres líneas que comienzan con
//   app.get) muestran una definición de ruta que se llamará cuando se
//   reciba una petición  HTTP GET con una dirección ('/') relativa al
//   directorio raíz. La función 'callback' coge una petición y una
//   respuesta como argumentos, y ejecuta un send() en la respuesta,
//   para enviar la cadena  de caracteres: "Hola Mundo!".
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

// El bloque final de código, define y crea el servidor, escuchando el
// puerto 3000 e imprime un comentario en la consola. Cuando se está
// ejecutando el servidor, es posible ir hasta la dirección  localhost:3000
// en un navegador, y ver como el servidor de este ejemplo devuelve el
// mensaje de respuesta.
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
