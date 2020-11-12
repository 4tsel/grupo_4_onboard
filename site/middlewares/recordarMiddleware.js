
function recordarMiddleware(req, res, next) {

    if (req.cookies.recordar) { //Comprueba cookies
        req.session.user = req.cookies.recordar; //La sesión pasa por cookies
        res.locals.user = req.session.user; //Locals pasa por sesión
        next();  
    } else {
        next();
    }

}


module.exports = recordarMiddleware