const express = require('express');
const router = express.Router();
const APIcontroller = require('../controllers/APIcontroller')


//Aca van las rutas de tu API
router.get('/products', APIcontroller.list);
router.get ('/products/:id', APIcontroller.show);
router.get('/brand',APIcontroller.brandName)
router.get('/ultimoProductoCreado', APIcontroller.ultimoProductoCreado)


module.exports = router;
