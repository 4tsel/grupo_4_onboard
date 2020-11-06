const { DataTypes } = require("sequelize/types");
const config = require("../config/config");
module.exports =(sequelize,dataTypes) => {
    let alias = 'Categorias';
    let cols = {
        id : { type : dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement : true,
            primaryKey : true 
        },
        nombre : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        imagen : {
            type : dataTypes.STRING(45),
            allowNull : false
        }
    }

    let config ={
        tableName : 'Categorias',
        timestamps : true,
        underscore : true
    }
    const Categoria =sequelize.define(alias,cols,config);
     //ESTABLECIENDO ASOCIACIONES Y SUS RESPECTIVAS RELACIONES jeje
    Categoria.associate = function(models){
    Categoria.hasMany(models.Products,{ //Una categoria tiene muchos productos. Relación (1:M)
        as : "productos",
        foreignKey : "id_producto"
    })
    }
    return Categoria;
}