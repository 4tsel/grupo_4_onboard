const path = require(`path`);
let { check, validationResult, body } = require(`express-validator`);
const userDB = require(path.join(`..`, `data`, `userDB`));

module.exports = [
    check(`email`).isEmail(),
    check(`password`).isLength({ min: 8 }).withMessage(`La contraseña debe tener como mínimo 8 caracteres`)
]