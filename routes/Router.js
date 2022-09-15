const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');
const validation = require('../middlewares/validation');

router.get('/', Controller.index); 
router.get('/create', Controller.create); 
router.post('/create', validation, Controller.createProduct); 
router.get("/edit/:id",  Controller.edit  )
router.post("/edit/:id", validation , Controller.editProcess )
router.post('/delete/:id', Controller.destroy);



module.exports = router;
