module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuarios'

    let cols = {
        id: {
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        contraseña: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        direccion: {
            type: dataTypes.STRING(100),
        },
        ciudad: {
            type: dataTypes.STRING(45),
        },
        provincia: {
            type: dataTypes.STRING(45),
        },
        fecha: {
            type: dataTypes.DATEONLY,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }

    }
    let config = {
        tableName: 'usuarios',
        timestamps: true, //Si tiene timestamps hay que especificarlos en cols y config.
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscore: true
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}