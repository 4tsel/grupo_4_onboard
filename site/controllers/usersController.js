const express = require(`express`);

const usersController = {

    index: (req, res)=>{
        render(`register.ejs`);
    }

}

module.exports = usersController;