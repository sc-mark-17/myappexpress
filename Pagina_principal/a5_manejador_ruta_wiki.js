// Hay un método general para definir las rutas:
// app.all(), el cual será llamado en respuesta a
// cualquier método HTTP. Se usa para cargar
// funciones del middleware en una dirección
// particular para todos los métodos de peticiones.
// El siguiente ejemplo (de la documentación de
//   Express) muestra el uso de los manejadores a
//   /secret  sin tener en cuenta el verbo HTTP
//   utilizado

// 1) uso del verbo get
/*app.get('/', function(req, res) {
  res.send('Hello World!');
});*/

// 2) Hay un método general para definir las rutas:  app.all(),
// el cual será llamado en respuesta a cualquier método HTTP
/*app.all('/secret', function(req, res, next) {
  console.log('Accediendo a la seccion secreta ...');
  next(); // pasa el control al siguiente manejador
});*/

// a5_manejador_ruta_wiki.js - Modulo de rutas Wiki

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Página de inicio Wiki');
});

// About page route
router.get('/about', function(req, res) {
  res.send('Acerca de esta wiki');
});

module.exports = router;
