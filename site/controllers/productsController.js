const db = require(`../db/models`);
const sequelize = db.sequelize;
let {validationResult} = require(`express-validator`);

const productsController = {

    //CREATE
    agregar: (req, res) => { //Seleccionar qué agregar (Producto o categoría)

        res.render(`agregar.ejs`, { titulo: `Agregar` });
    },
    agregarProducto: function (req, res) {

        db.Categorias.findAll()
            .then((categorias) => {
                res.render(`agregarItem.ejs`, {
                    categorias: categorias,
                    titulo: `Agregar Producto`
                });
            })

    },
    agregandoProducto: function (req, res, next) {

        db.Productos.create({
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            descuento: req.body.descuento ? req.body.descuento : 0,
            id_categorias: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.files[0] ? req.files[0].filename : 'default.jpg'
        })
            .catch(error => {
                console.log(error);
            })
        res.redirect(`/prod/add`)

    },
    agregarCategoria: (req, res) => {

        res.render(`agregarCat.ejs`, {
            titulo: `Agregar categoría`
        });
    },
    agregandoCategoria: (req, res, next) => {

        let errors = validationResult(req)
        console.log(errors)

        if (errors.isEmpty()) {

            db.Categorias.create({
                nombre: req.body.name,
                icono: req.body.icon
            })
                .then(() => {
                    res.redirect(`/prod/add`)
                })
                .catch(error => {
                    console.log(error)
                })

        } else {
            return res.render(`agregarCat.ejs`, { errors: errors.errors })
        }
        

    },

    //READ
    busqueda: (req, res) => { //Usa la barra de búsqueda del header para obtener resultados.

        db.Productos.findAll({
            where: {
                [db.Sequelize.Op.or]: { //Operador or
                    marca: { [db.Sequelize.Op.like]: `%${req.query.search}%` }, //Busca por marca
                    modelo: { [db.Sequelize.Op.like]: `%${req.query.search}%` } //Busca por modelo
                }
            }
        })
            .then(resultados => {
                res.render(`resultadosBusqueda`, {
                    resultados: resultados,
                    busqueda: req.query.search,
                    titulo: `Búsqueda`
                })
            })

    },
    lista: (req, res) => { //Listado de productos

        db.Productos.findAll()
            .then(productos => {
                res.render(`products.ejs`, {
                    productos: productos,
                    titulo: `Nuestros productos`,
                })
            })
            .catch(error => {
                console.log(error)
            })

    },
    catLista: (req, res) => { //Listado de categorías

        db.Categorias.findAll()
            .then(categorias => {
                res.render(`categorias.ejs`, {
                    categorias: categorias,
                    titulo: `Nuestras categorias`
                })
            })

    },
    catFiltrada: (req, res) => { //Listado de productos filtrados por categoría seleccionada en catLista

        db.Productos.findAll({ where: { id_categorias: req.params.id } })
            .then(productos => {
                res.render(`catFiltrada`, {
                    productos: productos,
                    titulo: `Productos filtrados`
                })
            })
            .catch(error => {
                console.log(error)
            })

    },
    detalle: (req, res) => { //Detalle del producto

        db.Productos.findByPk(req.params.id, { include: [{ association: `categoria` }] })
            .then(producto => {
                res.render(`productDetail`, {
                    titulo: `${producto.marca} ${producto.modelo}`,
                    producto: producto
                })
            })
            .catch(error => {
                console.log(error)
            })

    },

    //UPDATE
    editarProducto: (req, res) => { // Se cargan los datos del producto a editar

        let pedidoProducto = db.Productos.findByPk(req.params.id)
        let pedidoCategoria = db.Categorias.findAll()

        Promise.all([pedidoProducto, pedidoCategoria])
            .then(([producto, categorias]) => {
                res.render(`productEdit`, {
                    producto: producto,
                    categorias: categorias,
                    titulo: `Editar producto`
                })
            })
    },
    editandoProducto: (req, res) => { // Se realiza la edición del producto

        let imagenProducto;
        db.Productos.findByPk(req.params.id)
            .then(producto => {
                imagenProducto = producto.imagen
            })

        db.Productos.update({
            id: req.params.id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            descuento: req.body.descuento,
            id_categorias: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.files[0] ? req.files[0].filename : imagenProducto
        }, { where: { id: req.params.id } })

        res.redirect(`/prod/det/${req.params.id}`)

    },

    //DELETE
    eliminar: (req, res) => { //Elimina producto por id

        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect(`/prod`);

    },
}

module.exports = productsController;
