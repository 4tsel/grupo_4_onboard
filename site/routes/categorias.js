const express = require(`express`);
const router = express.Router();
const categoriasController = require(`../controllers/categoriasController.js`);


router.get(`/`, categoriasController.index);
router.get(`/add`, categoriasController.agregar);

module.exports = router;