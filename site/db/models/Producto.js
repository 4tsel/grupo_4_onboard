const { DataTypes } = require("sequelize/types");
const config = require("../config/config");

module.exports =(sequelize,dataTypes) => {
let alias = 'Productos';
let cols = {
    id : { type : dataTypes.INTEGER(),
        allowNull: false,
        autoIncrement : true,
        primaryKey : true 
    },
    nombre : {
        type : dataTypes.STRING(100),
        allowNule : false,
        autoIncrement: false 
    },
    precio : {
        type : dataTypes.DECIMAL(5,2).UNSIGNED,
        allowNule : false
    },
    descuento : {
        type : dataTypes.INTEGER(11),
        allowNule : false
    },
    descripcion : {
        type : dataTypes.STRING(300),
        allowNule : false
    },

    imagen : {
        type : dataTypes.STRING(100),
        allowNule : false
    },
    id_categorias : {
        type : dataTypes.INTEGER()
    },
    id_admin :{
        type : dataTypes.INTEGER()
    }
}
let config ={
    tableName : 'Productos',
    timestamps : true,
    underscore : true
}
    const Producto =sequelize.define(alias,cols,config);
    //ESTABLECIENDO ASOCIACIONES Y SUS RESPECTIVAS RELACIONES jeje
    Producto.associate = function(models){

        Producto.belongsTo(models.Categorias,{// Un producto es de una categoria. Relación (N:1)
            as : 'categoria',
            foreignKey : 'id_categoria'
        });
       
    }
    return Producto;
}