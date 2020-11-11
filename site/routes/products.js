const express = require(`express`);
const router = express.Router();

//Controlador
const productsController = require(`../controllers/productsController`);

//Validaciones
const catCreationValidator = require(`../validations/catCreationValidator.js`);

//Middlewares
const uploadProductImage = require(`../middlewares/uploadProductImage.js`);
const adminMiddleware = require(`../middlewares/adminMiddleware.js`);

//CREATE
router.get(`/add`, adminMiddleware, productsController.agregar); //Selección de qué agregar

router.get(`/add/prod`, adminMiddleware, productsController.agregarProducto); //Formulario de adición
router.post(`/add/prod`, uploadProductImage.any(), productsController.agregandoProducto); //Proceso de adición

router.get(`/add/cat`, adminMiddleware, productsController.agregarCategoria); //Formulario de adición
router.post(`/add/cat`, catCreationValidator, productsController.agregandoCategoria); //Proceso de adición

//READ
router.get(`/`, productsController.lista); //Listado de productos

router.get(`/busqueda`, productsController.busqueda); //Búsqueda de productos

router.get(`/det/:id`, productsController.detalle); //Detalle de producto

router.get(`/cat`, productsController.catLista); //Listado de categorías
router.get(`/cat/:id`, productsController.catFiltrada); //Productos por categoría seleccionada en /cat

//UPDATE
router.get(`/:id/edit`, adminMiddleware, productsController.editarProducto); //Formulario de edición
router.put(`/:id/edit`, uploadProductImage.any(), productsController.editandoProducto); //Proceso de edición

//DELETE
router.delete(`/:id/delete`, adminMiddleware, productsController.eliminar); //Borrado de producto

module.exports = router;