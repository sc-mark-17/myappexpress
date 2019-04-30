// Para usar el router en nuestro archivo app principal,
// necesitamos require() el módulo de rutas (wiki.js),
// entonces llame use() en la aplicación Express para
// agregar el Router al software intermediario que maneja
// las rutas. Las dos rutas serán accesibles entonces desde
// /wiki/ y /wiki/about/.
var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
