const express = require(`express`);
const fs = require(`fs`);

let productsDB = require(`../data/productDB.js`);

const mainController = {
    index: (req, res) => {

        

        res.render(`index.ejs`,
            {
                titulo: `ONBOARD`,
                productos: productsDB.productos,
                categorias: productsDB.categorias
            });
    },
}

module.exports = mainController;