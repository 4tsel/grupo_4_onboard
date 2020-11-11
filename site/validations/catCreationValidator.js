let { check, validationResult, body } = require(`express-validator`);
const db = require(`../db/models`);
const sequelize = db.sequelize;

module.exports = [
    check(`name`).isLength({min: 2}).withMessage(`El nombre tiene que tener al menos 2 caracteres.`),
    body(`name`).custom(function (value) {
        return db.Categorias.findOne({ where: { nombre: value } })
          .then(categoria => {
            if(categoria){
              return Promise.reject()
            }
          })
      }).withMessage(`Categoría previamente ingresada`)
]