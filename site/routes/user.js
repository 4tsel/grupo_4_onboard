const express = require(`express`);
const router = express.Router();

//validaciones
const registerValidator = require(`../validations/registerValidator`);
const loginValidator = require(`../validations/loginValidator`)

//middlewares
const uploadUserImage = require(`../middlewares/uploadUserImage.js`)
const userController = require(`../controllers/userController.js`);
const authMiddleware = require(`../middlewares/authMiddleware.js`);
const guestMiddleware = require(`../middlewares/guestMiddleware.js`);
const adminMiddleware = require(`../middlewares/adminMiddleware.js`)

//login
router.get(`/login`, guestMiddleware, userController.login);
router.post(`/login`, loginValidator, userController.procesoLogin)

//logout
router.get(`/logout`, userController.logout)

//register
router.get(`/registro`, guestMiddleware, userController.registro);
router.post(`/registro`, uploadUserImage.any(), registerValidator, userController.procesoRegistro);

//registro
router.get(`/cart`, authMiddleware, userController.carrito);
router.post(`/cart`, userController.sumandoCarrito)

//prueba
router.get(`/check`, function (req, res) {
  if (req.session.user == undefined) {
    res.send(`no estás logueado`)
  } else {
    res.send(`el usuario logueado es ${req.session.user.email}`)
  }
})

module.exports = router;