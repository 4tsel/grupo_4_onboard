const express = require(`express`);
const router = express.Router();
const apisController = require(`../controllers/apisController.js`);

router.post(`/users`, apisController.usersList);
router.post(`/categories`, apisController.catsList);
router.post(`/datos`, apisController.datosUsuario);

module.exports = router;