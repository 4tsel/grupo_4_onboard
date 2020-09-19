const express = require(`express`);
const router = express.Router();

const productsController = require(`../controllers/productsController`)

router.get(`/`, productsController.lista);

router.get(`/det/:id`, productsController.detalle);

router.get(`/add`, productsController.agregar);

router.get(`/:id/edit`, productsController.editarProducto);
router.put(`/:id/edit`, productsController.editandoProducto);

router.delete(`/:id/delete`, productsController.eliminar);


router.get(`/add/cat`, productsController.agregarCategoria);
router.post(`/add/cat`, productsController.agregandoCategoria)

router.get(`/add/prod`, productsController.agregarProducto);
router.post(`/add/prod`, productsController.agregandoProducto);

router.get(`/cat`, productsController.catLista);

module.exports = router;