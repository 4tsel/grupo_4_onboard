const express = require(`express`);
const router = express.Router();

const userController = require(`../controllers/userController.js`);

//login

router.get(`/login`, userController.login);

//register

router.get(`/registro`, userController.registro);
router.post(`/registro`, userController.procesoRegistro)

module.exports = router;