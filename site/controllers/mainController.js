const express = require(`express`)

const mainController = {

    // Ruta principal
    index: (req, res)=>{
        res.render(`index.ejs`);
    },
}

module.exports = mainController