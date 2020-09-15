const express = require(`express`);
const app = express();

// Configuro la carpeta public y el view engine en ejs.
app.use(express.static(__dirname+ `/public`));
app.set(`view engine`, `ejs`);

// Puerto
app.listen(3030, ()=>console.log(`Servidor iniciado en el puerto 3030`));

// Error 404



// Rutas requeridas
const routeMain = require(`./routes/main.js`);
const routeProducts = require(`./routes/products.js`);
const routeUsers = require(`./routes/users.js`);
const routeCarrito = require(`./routes/carrito.js`);
const routeCategorias = require(`./routes/categorias.js`);
const { route } = require("./routes/main.js");


// Rutas principales
app.use(`/`, routeMain);
app.use(`/prod`, routeProducts);
app.use(`/user`, routeUsers);
app.use(`/cart`, routeCarrito);
app.use(`/cat`, routeCategorias);

// Errores
app.use((req, res, next) =>{
    res.status(404).render(`error.ejs`)
})