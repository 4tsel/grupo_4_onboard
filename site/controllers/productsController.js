const expres = require(`express`);

const productsController = {

    // Ruta principal
    index: (req, res)=>{
        res.render(`products.ejs`);
    },
    productDetail: (req, res)=>{
        let product = req.params.id;
        res.render(`productDetail.ejs`)
    } 
}

module.exports = productsController;