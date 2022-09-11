const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const Controller = require('../controllers/Controller')

router.get('/', Controller.index); 
router.get('/create', Controller.create); 
router.post('/create', Controller.createProduct); 



module.exports = router;
