const path = require(`path`);
let {check, validationResult, body} = require(`express-validator`);
const userDB = require(path.join(`..`, `data`, `userDB`));


module.exports = [
  check(`nombre`).isLength({min: 1}).withMessage('Debes introducir un nombre'),
  check(`apellido`).isLength({min: 1}).withMessage('Debes introducir un apellido'),
  check(`email`).isEmail().withMessage('Debes introducir un email válido'),
  check(`password`).isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
  body(`email`).custom(function(value){
    for(let i = 0; i < userDB.usuarios.length; i ++){
      if(userDB.usuarios[i].email == value){
        return false;
      }
    }
    return true
  }).withMessage(`El email pertenece a un usuario registrado`)
]