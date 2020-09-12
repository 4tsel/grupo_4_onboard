const express = require(`express`);
const app = express();

// Configuro la carpeta public y el view engine en ejs.
app.use(express.static(__dirname+ `/public`));
app.set(`view engine`, `ejs`);

// Puerto
app.listen(3030, ()=>console.log(`Servidor iniciado en el puerto 3030`));

// Rutas requeridas
const routeMain = require(`./routes/main.js`);
const routeProducts = require(`./routes/products.js`);
const routeUsers = require(`./routes/users.js`);
const routeCarrito = require(`./routes/carrito.js`);

// Rutas principales
app.use(`/`, routeMain);
app.use(`/p`, routeProducts);
app.use(`/u`, routeUsers);
app.use(`/c`, routeCarrito);