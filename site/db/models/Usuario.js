const { DataTypes } = require("sequelize/types");
const config = require("../config/config");

module.exports =(sequelize,dataTypes) => {

let alias ='Usuarios'

let cols = {
id :{
type : dataTypes.INTEGER(),
allowNull: false,
autoIncrement : true,
primaryKey : true 
},
nombre : {
type: dataTypes.STRING(45),
allowNule : false,
autoIncrement: false
},
apellido : {
    type: dataTypes.STRING(45),
    allowNule : false,
    autoIncrement: false
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
rol : {
type: dataTypes.STRING(45),
allowNule : false,
autoIncrement: false
},
avatar : {
type: dataTypes.STRING(45),
allowNule : false,
autoIncrement: false
},
direccion : {
    type: dataTypes.STRING(100),
},
ciudad : {
    type: dataTypes.STRING(45),
},
provincia : {
    type: dataTypes.STRING(45),
},
fecha : {
type : dataTypes.DATEONLY,
},
id_admin :{
    type : dataTypes.INTEGER()
}
}
  let config ={
      tableName : 'Usuarios',
      timestamps : true,
      underscore : true
  }
    
    const Usuario =sequelize.define(alias,cols,config);
    //ESTABLECIENDO ASOCIACIONES Y SUS RESPECTIVAS RELACIONES jeje
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Admins,{//Un admin tiene un usuario. Relación (1:1)
            as : 'usuario',
            foreignKey : 'id_admin'
        })
    }
    return Usuario;
} 