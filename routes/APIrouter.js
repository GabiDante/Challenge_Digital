const express = require('express');
const router = express.Router();
const APIcontroller = require('../controllers/APIcontroller')


//Aca van las rutas de tu API
router.get('/products', APIcontroller.list);
router.post('/products', APIcontroller.store);
router.get ('/products/:id', APIcontroller.show);
router.delete ('/products/:id', APIcontroller.delete);
//router.get('/brand',APIcontroller.brandName)


module.exports = router;
