const express = require(`express`);
const fs = require(`fs`);
const path = require(`path`);

let userDB = require(path.join(`..`, `data`, `userDB`))

const userController = {
    login: (req, res) => {

        res.render(`ingreso.ejs`)

    },
    registro: (req, res) => {

        res.render(`register.ejs`,
            {
                titulo: `Registro`,
            })

    },
    procesoRegistro: (req, res) => {

        let lastID = 0;
        if (userDB.length > 0) {
            userDB.forEach(user => {
                if (user.id > lastID) {
                    lastID = user.id
                }
            })
        };

        let usuario = {
            id: lastID + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            admin: false
        }
        
        userDB.push(usuario);
        fs.writeFileSync(path.join(__dirname, `..`, `data`, `user.json`), JSON.stringify(userDB), `utf-8`)
        res.redirect(`/`)
    }
}

module.exports = userController;