const db = require(`../db/models`);
const sequelize = db.sequelize;


const mainController = {
    index: (req, res) => {

        let listaCategorias = db.Categorias.findAll()
        let listaProductos = db.Productos.findAll()

        Promise.all([listaCategorias, listaProductos])
            .then(([categorias, productos]) => {
                res.render(`index.ejs`,{
                        titulo: `ONBOARD`,
                        productos: productos,
                        categorias: categorias,
                    });
            })

    },
}

module.exports = mainController;