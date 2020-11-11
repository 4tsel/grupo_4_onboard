const express = require(`express`);
const app = express();
const methodOverride = require(`method-override`);
const path = require('path');
const session = require(`express-session`)
const cookieParser = require(`cookie-parser`);
const recordarMiddleware = require(`./middlewares/recordarMiddleware.js`);
const localsUserCheck = require(`./middlewares/localsUserCheck.js`);

//Configuración de Express
app.listen(3030, ()=>console.log(`asdasdasd en el 3030`));
app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + `/public`));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({secret: `Secreto`}));
app.use(recordarMiddleware);
app.use(localsUserCheck);

//Rutas
const routeMain = require(`./routes/main.js`);
const routeProducts = require(`./routes/products.js`);
const routeUser = require(`./routes/user.js`);

app.use(`/`, routeMain);
app.use(`/prod`, routeProducts);
app.use(`/user`, routeUser);

//Error 404

app.use((req, res, next) => {
    res.status(404).render(`error.ejs`)
});