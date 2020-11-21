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
    }
}

module.exports = apisController;