const express = require(`express`);
const router = express.Router();
const multer = require(`multer`);
const path = require(`path`);
let { check, validationResult, body } = require(`express-validator`);
const fs = require(`fs`)
let userDB = require(path.join(`..`, `data`, `userDB`));
const authMiddleware = require(`../middlewares/authMiddleware`)
const guestMiddleware = require(`../middlewares/guestMiddleware`);
const registerMiddleware = require(`../middlewares/registerMiddleware`);
const loginMiddleware = require(`../middlewares/loginMiddleware`)


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

router.get(`/login`, guestMiddleware, userController.login);
router.post(`/login`, loginMiddleware, userController.procesoLogin)

//register

router.get(`/registro`, guestMiddleware, userController.registro);

router.post(`/registro`, upload.any(), registerMiddleware, userController.procesoRegistro);

//registro

router.get(`/cart`, userController.carrito);
router.post(`/cart`, userController.sumandoCarrito)

//prueba
router.get(`/check`, function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send(`no estás logueado`)
  } else {
    res.send(`el usuario logueado es ${req.session.usuarioLogueado.email}`)
  }
})

module.exports = router;