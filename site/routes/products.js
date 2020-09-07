const express = require(`express`);
const router = express.Router();

const productsController = require(`../controllers/productsController.js`);

// Subrutas
router.get(`/`, productsController.index)
router.get(`/:id`, productsController.productDetail)

module.exports = router;