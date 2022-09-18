let { body } = require('express-validator');

const validation = [ 

    //Aca van las validaciones del form

    body("name").notEmpty().withMessage("Por favor indicar un nombre").bail()
    .isLength({min:5, max:30}).withMessage("El nombre debe tener entre 5 y 30 caracteres"),
    body("brand").notEmpty().withMessage("Por favor elige una marca"),
    body("color").notEmpty().withMessage("Por favor elige un color"),
    body("material").notEmpty().withMessage("Por favor elige un material"),
    body("price").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isNumeric().withMessage('El precio debe contener solo números'),
    body("descripcion").notEmpty().withMessage("Debes ingresar una descripcion").bail()
    .isLength({min:10, max:250}).withMessage("La descripcion debe tener entre 10 y 250 caracteres"),
    body("url").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isURL({protocols: ['http','https','ftp']}).withMessage("Debes ingresar una url valida"),
]

module.exports = validation;