let { check, validationResult, body } = require(`express-validator`);
const db = require('../db/models');

module.exports = [
    check(`marca`).isLength({ min: 4 }).withMessage(`La marca debe tener al menos 4 caracteres`),
    check(`modelo`).isLength({ min: 4 }).withMessage(`El modelo debe tener al menos 4 caracteres`),
    check(`descripcion`).isLength({min:20}).withMessage(`La descripción debe tener al menos 20 caracteres`),
    check(`precio`).isFloat({min: 1}).withMessage(`El precio debe ser válido.`),
    check(`descuento`).isInt({min: 0}).withMessage(`Descuentos negativos no válidos.`)
]   

