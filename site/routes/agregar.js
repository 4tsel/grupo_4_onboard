const express = require(`express`);
const router = express.Router();

const agregarController = require(`../controllers/agregarController.js`);

router.get(`/`, agregarController.index);


module.exports = router;