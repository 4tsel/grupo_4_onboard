const express = require(`express`);
const app = express();
const methodOverride = require(`method-override`);
const path = require('path');

app.listen(3030, ()=>console.log(`asdasdasd en el 3030`));
app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + `/public`));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

const routeMain = require(`./routes/main.js`);
const routeUser = require(`./routes/user.js`);
const routeProducts = require(`./routes/products.js`);

app.use(`/`, routeMain);
app.use(`/prod`, routeProducts);
app.use(`/user`, routeUser);

//Error 404

app.use((req, res, next) => {
    res.status(404).render(`error.ejs`)
});