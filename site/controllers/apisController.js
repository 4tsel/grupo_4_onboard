const db = require(`../db/models`);
const sequielize = db.sequelize;

const apisController = {
    usersList: (req, res)=>{
        db.Usuarios.findAll({attributes:[`email`]})
            .then(usuarios => {
                res.json(usuarios)
            })
            .catch(error => {
                res.send(error);
            })
    },
    catsList: (req, res) => {
        db.Categorias.findAll({attributes:[`nombre`]})
            .then(categorias => {
                res.json(categorias);
            })
            .catch(error => {
                res.send(error);
            })
    },
    datosUsuario: (req, res) => {
        res.json(res.locals.user)
    }
}

module.exports = apisController;