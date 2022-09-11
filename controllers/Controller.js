let { validationResult } = require('express-validator');
let db = require("../data/models"); 

const Controller = {

    index: (req, res) => {
        let giveProduct = db.Product.findAll({include:[{association:"brands"},{association:"materials"},{association:"colors"}]})
        let giveimages = db.Image.findAll()
        

        Promise.all([giveProduct,giveimages])
        .then(function([products,images]){
            res.render("index",{products:products, images:images})
        })

    },
    create: (req,res) =>{
        
        let giveProduct = db.Product.findAll({include:[{association:"brands"},{association:"materials"},{association:"colors"}]})
        let selectBrand = db.Brand.findAll()
        let selectColor = db.Color.findAll()
        let selectMaterial = db.Material.findAll()

        Promise.all([giveProduct,selectBrand,selectColor,selectMaterial])
        .then(function([products,brand,color,material]){
            return res.render("create",{products:products,brand:brand,color:color,material:material})
        })
    },
    createProduct:(req,res) => {
        db.Product.create({
            name: req.body.name,
            brand_id: req.body.brand,
            color_id:req.body.color,
            material_id: req.body.material,
            price: req.body.price,
            description: req.body.description
        })

        res.redirect("/")

    }
}

module.exports = Controller