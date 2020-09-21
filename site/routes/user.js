const express = require(`express`);
const router = express.Router();
let multer = require(`multer`);
let path = require(`path`);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  var upload = multer({ storage: storage })

const userController = require(`../controllers/userController.js`);

//login

router.get(`/login`, userController.login);

//register

router.get(`/registro`, userController.registro);
router.post(`/registro`, upload.any(), userController.procesoRegistro)

module.exports = router;