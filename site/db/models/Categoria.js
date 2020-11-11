module.exports = (sequelize, dataTypes) => {

    let alias = 'Categorias';

    let cols = {
        id: {
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        icono: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: 'categorias',
        timestamps: false,
        underscore: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models) {

        Categoria.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "id_categorias"
        })

    }

    return Categoria;
}