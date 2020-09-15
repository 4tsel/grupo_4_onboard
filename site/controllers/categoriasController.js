const express = require(`express`);

const categoriasController = {
    index: (req, res)=>{
        res.send(`categorias.ejs`)
    }
}

module.exports = categoriasController;