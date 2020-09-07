const express = require(`express`);
const { render } = require("ejs");

const carritoController = {
    index: (req, res)=>{
        res.render(`carrito.ejs`);
    }
}

module.exports = carritoController;