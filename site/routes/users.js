const express = require(`express`);
const router = express.Router();

const usersController = require(`../controllers/usersController.js`);

router.get(`/register`, usersController.index);

module.exports = router;