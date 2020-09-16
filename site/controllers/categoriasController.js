const express = require(`express`);

const categoriasController = {
    index: (req, res)=>{
        res.render(`categorias.ejs`)
    }
}

module.exports = categoriasController;