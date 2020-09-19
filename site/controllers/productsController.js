const express = require(`express`);
const fs = require(`fs`);
const path = require(`path`);

let productsDB = require(`../data/productDB.js`);

const productsController = {

    lista: (req, res) => {

        res.render(`products.ejs`,
            {
                productos: productsDB.productos,
                categorias: productsDB.categorias,
                titulo: `Productos`
            })
    },
    editarProducto: (req, res) => {
        let id = req.params.id
        let productoAEditar = productsDB.productos[id - 1]

        res.render(`productEdit.ejs`,
            {
                producto: productoAEditar,
                categorias: productsDB.categorias,
            })

    },
    editandoProducto: (req, res) => {

        let id = req.params.id;
        let productoAEditar = {
            id: id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            categoria: req.body.categoria,
        }

        productsDB.productos[id - 1] = productoAEditar;

        fs.writeFileSync(path.join(__dirname, `..`, `data`, `product.json`), JSON.stringify(productsDB), `utf-8`);
        res.redirect(`/prod/det/${id}`)

    },
    catLista: (req, res) => {

        res.render(`categorias.ejs`,
            {
                categorias: productsDB.categorias
            })
    },
    detalle: (req, res) => {

        let id = req.params.id;


        let producto = productsDB.productos[id - 1];



        res.render(`productDetail.ejs`,
            {
                titulo: `${producto.marca} ${producto.modelo}`,
                producto: producto,
            });
    },
    agregar: (req, res) => {

        res.render(`add.ejs`);
    },
    agregarCategoria: (req, res) => {

        res.render(`addCat.ejs`);
    },
    agregandoCategoria: (req, res) => {

        let categoria = {

            nombre: req.body.name,
            icono: req.body.icon

        }

        productsDB.categorias.push(categoria);

        fs.writeFileSync(path.join(__dirname, `..`, `data`, `product.json`), JSON.stringify(productsDB), `utf-8`);
        res.redirect(`/prod/add`);

    },
    agregarProducto: (req, res) => {
        let categorias = productsDB.categorias

        res.render(`addProd.ejs`,
            {
                categorias: categorias,
            });
    },
    agregandoProducto: (req, res) => {

        let lastID = 0;
        if (productsDB.productos.length > 0) {
            productsDB.productos.forEach(producto => {
                if (producto.id > lastID) {
                    lastID = producto.id
                }
            })
        }

        let productoAgregado = {

            id: lastID + 1,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            categoria: req.body.categoria

        }
        productsDB.productos.push(productoAgregado);

        fs.writeFileSync(path.join(__dirname, `..`, `data`, `product.json`), JSON.stringify(productsDB), `utf-8`);
        res.redirect(`/prod/add`);

    },
    eliminar: (req, res) => {

        let id = req.params.id

        let producto = productsDB.productos[id - 1];

        productsDB.productos.splice(producto, 1);

        productsDB.productos.forEach(producto => {
            if(producto.id == productsDB.productos.indexOf(producto) - 1){
                producto.id = producto.id 
            } else {
                producto.id = productsDB.productos.indexOf(producto) + 1
            }
        })

        fs.writeFileSync(path.join(__dirname, `..`, `data`, `product.json`), JSON.stringify(productsDB))
        res.redirect(`/prod`)

       


    }


};

module.exports = productsController;