const express = require(`express`)

const mainController = {
    index: (req, res)=>{
        res.render(`index.ejs`);
    },
}

module.exports = mainController