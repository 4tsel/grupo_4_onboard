const express = require(`express`);
const router = express.Router();
const apisController = require(`../controllers/apisController.js`);

router.post(`/users`, apisController.usersList);

module.exports = router;