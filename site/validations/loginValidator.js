let { check, validationResult, body } = require(`express-validator`);
const bcrypt = require('bcrypt');
const db = require('../db/models');

module.exports = [
    check(`email`).isEmail().withMessage(`Debes introducir un email válido`),
    check(`password`).isLength({ min: 8 }).withMessage(`Debes introducir tu contraseña`),
    body(`email`).custom(function (value){
        return db.Usuarios.findOne({where:{email: value}})
            .then(user => {
                if(!user){
                    return Promise.reject()
                }
            })
    }).withMessage(`Email no encontrado en la base de datos`),
    body(`password`).custom(function (value, { req }) {

        return db.Usuarios.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) {
                    let contraseña = bcrypt.compareSync(value, user.contraseña)
                    if (!contraseña) {
                        return Promise.reject()
                    }
                }
            })
    }).withMessage(`Credenciales inválidas`)
]