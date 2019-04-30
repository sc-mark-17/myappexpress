// generalmente se usan de terceros y se instalan
// con el siguiente comando Bash
// $ npm install morgan

// Entonces podría llamar a la función use() en un
// objeto de aplicación Express para utilizar este
// middleware a su aplicación.
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));

// ejemplo función middleware
var a_middleware_function = function(req, res, next) {
  // ... se relaiza alguna operación
  next(); // llamada a next() asi Express llamara la siguiente función
          // en la cadena
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
