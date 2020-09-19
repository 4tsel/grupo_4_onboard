const express = require(`express`);
const fs = require(`fs`);

const mainController = {
    index: (req, res) => {
        res.render(`index.ejs`,
            {
                titulo: `ONBOARD`,
            });
    },
}

module.exports = mainController;