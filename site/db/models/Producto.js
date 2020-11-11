module.exports = (sequelize, dataTypes) => {

    let alias = 'Productos';

    let cols = {
        
        id: {
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        marca: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        modelo: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        precio: {
            type: dataTypes.DECIMAL(7, 2).UNSIGNED,
            allowNull: false
        },
        descuento: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_categorias: {
            type: dataTypes.INTEGER()
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscore: true
    }
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {

        Producto.belongsTo(models.Categorias, {
            as: 'categoria',
            foreignKey: 'id_categorias'
        });

    }
    return Producto;
}