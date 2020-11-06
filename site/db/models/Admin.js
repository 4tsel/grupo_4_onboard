const { DataTypes } = require("sequelize/types");
const config = require("../config/config");

module.exports =(sequelize,dataTypes) => {

let alias = 'Admins';
let cols = {
    id : {
    type : dataTypes.INTEGER(),
    allowNull: false,
    autoIncrement : true,
    primaryKey : true
    },
    email : {
        type: dataTypes.STRING(45),
        allowNule : false,
        autoIncrement: false
        },
     contraseña : {
        type: dataTypes.STRING(100),
        allowNule : false,
        autoIncrement: false
        },
}
let config ={
    tableName : 'Admins',
    timestamps : true,
    underscore : true
}
    const Admin =sequelize.define(alias,cols,config);
     //ESTABLECIENDO ASOCIACIONES Y SUS RESPECTIVAS RELACIONES jeje
     Admin.associate = function(models){
         Admin.HasMany(models.Admin,{ // Un admin puede subir muchos productos. Relación (1:M)
            as: 'productos',
            foreignKey : 'id_producto'
         })
     }
    return Admin;
}