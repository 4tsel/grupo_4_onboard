const express = require(`express`);

const agregarController = {
    index : (req, res)=>{
        res.render(`agregar.ejs`)
    },
    admin: (req, res) => {
        res.render(`agregarAdmin.ejs`)
    }

}

module.exports = agregarController ;