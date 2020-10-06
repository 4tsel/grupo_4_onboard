const express = require(`express`);
const fs = require(`fs`);
const path = require(`path`);
const bcrypt = require(`bcrypt`);
let { check, validationResult, body } = require(`express-validator`);

let userDB = require(path.join(`..`, `data`, `userDB`));
let productsDB = require(`../data/productDB.js`);

const userController = {
    login: (req, res) => {

        res.render(`ingreso.ejs`);

    },

    procesoLogin: (req, res) => {

        let errors = validationResult(req);

        let usuarioALoguear;

        if (errors.isEmpty()) {



            for (let i = 0; i < userDB.usuarios.length; i++) {
                if (userDB.usuarios[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, userDB.usuarios[i].password)) {
                        usuarioALoguear = userDB.usuarios[i];
                        break;
                    }
                }
            }

            if (usuarioALoguear == undefined) {
                return res.render(`ingreso.ejs`, {
                    errors: [
                        { msg: 'Email o contraseña incorrectos' }
                    ]
                });
            }

            req.session.user = usuarioALoguear;

            res.redirect(`/`)
        } else {
            res.render(`ingreso`, { errors: errors.errors })
        }
    },
    logout: (req, res) => {

        req.session.destroy()
        res.redirect(`/`)

    },
    registro: (req, res) => {

        res.render(`register.ejs`,
            {
                titulo: `Registro`,
            });

    },
    procesoRegistro: (req, res, next) => {

        let errors = validationResult(req)

        console.log(errors)

        if (errors.isEmpty()) {

            let lastID = 0;
            if (userDB.usuarios.length > 0) {
                userDB.usuarios.forEach(user => {
                    if (user.id > lastID) {
                        lastID = user.id;
                    }
                })
            };

            let usuario = {
                id: lastID + 1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                admin: false,
                imagen: req.files[0] ? req.files[0].filename : "default.png"
            }

            userDB.usuarios.push(usuario);
            fs.writeFileSync(path.join(__dirname, `..`, `data`, `user.json`), JSON.stringify(userDB), `utf-8`);
            res.redirect(`/user/login`);
        } else {
            return res.render(`register.ejs`, { errors: errors.errors })
        }
    },
    carrito: (req, res) => {

        const carrito = userDB.carrito

        res.render(`carrito.ejs`,
            {
                carrito: carrito
            });
    },
    sumandoCarrito: (req, res) => {

        let producto = {
            id: req.body.id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            imagen: req.body.imagen,
            cantidad: req.body.cantidad
        }

        userDB.carrito.push(producto);
        fs.writeFileSync(path.join(__dirname, `..`, `data`, `user.json`), JSON.stringify(userDB), `utf-8`)
        res.redirect(`/user/cart`)

    }
}

module.exports = userController;