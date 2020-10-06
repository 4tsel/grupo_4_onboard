const express = require(`express`);
const router = express.Router();
let multer = require(`multer`);
let path = require(`path`)

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

const authMiddleware = require(`../middlewares/authMiddleware.js`);
const guestMiddleware = require(`../middlewares/guestMiddleware.js`);
const adminMiddleware = require(`../middlewares/adminMiddleware.js`)

const productsController = require(`../controllers/productsController`)

router.get(`/`, productsController.lista);

router.get(`/det/:id`, productsController.detalle);

router.get(`/add`, adminMiddleware, productsController.agregar);

router.get(`/:id/edit`, adminMiddleware, productsController.editarProducto);

router.put(`/:id/edit`, upload.any(), productsController.editandoProducto);

router.delete(`/:id/delete`, productsController.eliminar);


router.get(`/add/cat`, adminMiddleware, productsController.agregarCategoria);
router.post(`/add/cat`, productsController.agregandoCategoria)

router.get(`/add/prod`, adminMiddleware, productsController.agregarProducto);
router.post(`/add/prod`, upload.any(), productsController.agregandoProducto);

router.get(`/cat`, productsController.catLista);

router.get(`/cat/:id`, productsController.catFiltrada)

router.get(`/marca/:id`, productsController.marcaFiltrada);

module.exports = router;