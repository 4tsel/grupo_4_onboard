const express = require(`express`);
const app = express();

// Configuro la carpeta public y el view engine en ejs.
app.use(express.static(__dirname+ `/public`));
app.set(`view engine`, `ejs`);

// Puerto
app.listen(3030, ()=>console.log(`Servidor iniciado en el puerto 3030`))

// Rutas
const routeMain = require(`./routes/main.js`)

// 
app.use(`/`, routeMain)