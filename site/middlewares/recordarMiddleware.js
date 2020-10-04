let userDB = require(`../data/userDB`);

const recordarMiddleware = (req, res, next) => {

    next();

    if (req.cookies.recordar != undefined && req.session.usuarioLogueado == undefined) {


        let usuarioALoguear;

        for (let i = 0; i < userDB.usuarios.length; i++) {
            if (userDB.usuarios[i].email == req.cookies.recordar) {

                usuarioALoguear = userDB.usuarios[i];
                break;

            }
        }
        req.session.usuarioLogueado = usuarioALoguear;
    }
}

module.exports = recordarMiddleware