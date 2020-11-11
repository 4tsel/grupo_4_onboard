let { check, validationResult, body } = require(`express-validator`);
const db = require(`../db/models`);
const sequelize = db.sequelize;

module.exports = [
  check(`nombre`).isLength({ min: 1 }).withMessage('Debes introducir un nombre'),
  check(`apellido`).isLength({ min: 1 }).withMessage('Debes introducir un apellido'),
  check(`email`).isEmail().withMessage('Debes introducir un email válido'),
  check(`password`).isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
  body(`email`).custom(function (value) {
    return db.Usuarios.findOne({ where: { email: value } })
      .then(user => {
        if(user){
          return Promise.reject()
        }
      })
  }).withMessage(`El email pertenece a un usuario registrado`)
]