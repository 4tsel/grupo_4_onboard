const express = require(`express`);
const router = express.Router();
let multer = require(`multer`);
let path = require(`path`);
let {check, validationResult, body} = require(`express-validator`);
let fs = require(`fs`)
let userDB = require(path.join(`..`, `data`, `userDB`));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  var upload = multer({ storage: storage })

const userController = require(`../controllers/userController.js`);

//login

router.get(`/login`, userController.login);

//register

router.get(`/registro`, userController.registro);

router.post(`/registro`, upload.any(), [
  check(`nombre`).isLength({min: 1}).withMessage('Este campo debe estar completo'),
  check(`apellido`).isLength({min: 1}).withMessage('Este campo debe estar completo'),
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
], userController.procesoRegistro);

//registro

router.get(`/cart`, userController.carrito);
router.post(`/cart`, userController.sumandoCarrito)

module.exports = router;