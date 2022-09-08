let { validationResult } = require('express-validator');
let db = require("../data/models");

const Controller = {

    index: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            res.render("index",{products:products})
        })

    }


    }

module.exports = Controller