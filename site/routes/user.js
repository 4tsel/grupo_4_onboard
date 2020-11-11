const express = require(`express`);
const router = express.Router();

// Controlador
const userController = require(`../controllers/userController.js`);

//validaciones
const registerValidator = require(`../validations/registerValidator`);
const loginValidator = require(`../validations/loginValidator`)

//middlewares
const uploadUserImage = require(`../middlewares/uploadUserImage.js`);
const authMiddleware = require(`../middlewares/authMiddleware.js`);
const guestMiddleware = require(`../middlewares/guestMiddleware.js`);
const adminMiddleware = require(`../middlewares/adminMiddleware.js`);

//CREATE
router.get(`/registro`, guestMiddleware, userController.registro); //Formulario de registro
router.post(`/registro`, uploadUserImage.any(), registerValidator, userController.procesoRegistro); //Proceso de registro


//READ

router.get(`/login`, guestMiddleware, userController.login); //Formulario de ingreso
router.post(`/login`, loginValidator, userController.procesoLogin) //Proceso de ingreso

router.get(`/logout`, userController.logout); //Proceso de egreso

//UPDATE
router.get(`/perfil`, authMiddleware, userController.perfil); //Formulario de edición
router.put(`/:id/edit`, uploadUserImage.any(), userController.editar) //Proceso de edición

//DELETE
router.delete(`/:id/delete`, userController.eliminar); //Borrado de producto

//TEST
router.get(`/check`, function (req, res) {
  if (req.session.user == undefined) {
    res.send(`no estás logueado`)
  } else {
    res.send(`el usuario logueado es ${req.session.user.email}`)
  }
})

module.exports = router;