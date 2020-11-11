
const bcrypt = require(`bcrypt`);
let { check, validationResult, body } = require(`express-validator`);
const db = require(`../db/models`);
const sequelize = db.sequelize;

const userController = {

    //CREATE
    registro: (req, res) => { //Formulario de registro

        res.render(`register.ejs`,{
                titulo: `Registro`,
            });

    },
    procesoRegistro: (req, res, next) => { //Proceso de registro

        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {

            db.Usuarios.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                contraseña: bcrypt.hashSync(req.body.password, 10),
                admin: false,
                avatar: req.files[0] ? req.files[0].filename : "default.png"
            })
                .then(() => {
                    res.redirect(`/`);
                })
                .catch(error => {
                    console.log(error);
                })

        } else {
            return res.render(`register.ejs`, { errors: errors.errors })
        }
        console.log(errors)
    },

    //READ
    login: (req, res) => { //Formulario de ingreso

        res.render(`ingreso.ejs`);

    },

    procesoLogin: (req, res) => { //Proceso de ingreso

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.Usuarios.findOne({ where: { email: req.body.email } })
                .then(usuario => {
                    if (bcrypt.compareSync(req.body.password, usuario.contraseña)) {
                        req.session.user = {
                            id: usuario.id,
                            nombre: usuario.nombre,
                            apellido: usuario.apellido,
                            email: usuario.email,
                            avatar: usuario.avatar,
                            admin: usuario.admin
                        }
                        if (req.body.recordar) { //Implementación de cookies
                            res.cookie('recordar', req.session.user, { maxAge: 60000 * 60 })
                        }
                        res.locals.user = req.session.user

                        res.redirect(`/`)
                    }

                })
                .catch(error => {
                    console.log(error)
                })


        } else {
            res.render(`ingreso`, { errors: errors.errors })
        }
    },
    logout: (req, res) => { //Proceso de egreso

        res.clearCookie(`recordar`)
        req.session.destroy()
        res.redirect(`/`)

    },
    perfil: (req, res) => { //Lectura de datos / Formulario de edición

        db.Usuarios.findByPk(req.session.user.id)
            .then(usuario => {
                res.render(`userEdit`, {
                    usuario: usuario,
                    titulo: `Editar usuario`,
                })
            })
    },

    //UPDATE
    editar: (req, res) => { //Proceso de edición

        db.Usuarios.update({
            avatar: req.files[0] ? req.files[0].filename : req.session.user.avatar,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            provincia: req.body.provincia,
            fecha: req.body.fecha?req.body.fecha:req.session.user.fecha
        }, { where: { id: req.params.id } })
            .then(resultado=>{
                res.redirect(`/user/perfil`)
            })

    },

    //DELETE
    eliminar: (req, res) => { //Proceso de eliminación

        db.Usuarios.destroy({where: {id: req.params.id}})
            .then(resultado =>{
                res.clearCookie(`recordar`);
                req.session.destroy();
                return res.redirect(`/`)
            })
    }


}

module.exports = userController;