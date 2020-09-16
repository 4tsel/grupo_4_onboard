const express = require(`express`);

const categoriasController = {
    index: (req, res)=>{
        res.render(`categorias.ejs`)
    },
    agregar: (req, res) => {
        res.render(`agregarCat.ejs`)
    }
}

module.exports = categoriasController;