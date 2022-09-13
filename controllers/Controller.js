let { validationResult } = require('express-validator');
let db = require("../data/models"); 

const Controller = {

    index: (req, res) => {
        let giveProduct = db.Product.findAll({
            include:[
                {association:"brands"},
                {association:"materials"},
                {association:"colors"}
            ]})

            let giveimages = db.Image.findAll()
        

        Promise.all([giveProduct,giveimages])
        .then(function([products,images]){
            res.render("index",
            {
             products:products, 
             images:images
            })
        })

    },
    create: (req,res) =>{
        
        let giveProduct = db.Product.findAll({
            include:
            [
                {association:"brands"},
                {association:"materials"},
                {association:"colors"}
            ]
            })
        let selectBrand = db.Brand.findAll()
        let selectColor = db.Color.findAll()
        let selectMaterial = db.Material.findAll()

        Promise.all([giveProduct,selectBrand,selectColor,selectMaterial])
        .then(function([products,brand,color,material]){
            return res.render("create",{
                products:products,
                brand:brand,
                color:color,
                material:material
            })
        })
    },
  /*   createProduct:(req,res) => {
        db.Product.create({
            name: req.body.name,
            brand_id: req.body.brand,
            color_id:req.body.color,
            material_id: req.body.material,
            price: req.body.price,
            description: req.body.description
        })

        res.redirect("/")

    } */
    createProduct: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            let giveBrand = db.Brand.findAll()
            let giveColor = db.Color.findAll()
            let giveMaterial = db.Material.findAll()

            Promise.all([giveBrand, giveColor, giveMaterial])
                .then(function ([brand,color,material]) {
                    return res.render("create", {
                        brand: brand,
                        color: color,
                        material: material,
                        errors: resultValidation.mapped(),
                        oldData: req.body
                    })
                })
        } else {
            db.Product.create({
                name: req.body.name,
                brand_id: req.body.brand,
                color_id: req.body.color,
                material_id: req.body.material,
                price: req.body.price,
                description: req.body.descripcion
            })

            res.redirect("/")

    }
        },
          edit: (req,res) => { 
          let giveProduct = db.Product.findByPk(req.params.id)
          let giveImages = db.Image.findAll({
              include: [{
                  association: "products"
              }]
          })
          let giveBrand = db.Brand.findAll()
          let giveColor = db.Color.findAll()
          let giveMaterial = db.Material.findAll()

          Promise.all([giveProduct, giveImages, giveBrand, giveColor, giveMaterial])
              .then(function ([products, images, brand, color, material]) {
                  res.render("edit", {
                      products: products,
                      images: images,
                      brand: brand,
                      color: color,
                      material: material,
                                           
                  })
              }) 
          },

        editProcess: (req, res) => {
            const resultValidation = validationResult(req)
    
            if (resultValidation.errors.length > 0) {
                let giveProduct = db.Product.findByPk(req.params.id)
                let giveImages = db.Image.findAll({
                    include: [{
                        association: "products"
                    }]
                })
                let giveBrand = db.Brand.findAll()
                let giveColor = db.Color.findAll()
                let giveMaterial = db.Material.findAll()
    
                Promise.all([giveProduct, giveImages, giveBrand, giveColor, giveMaterial])
                    .then(function ([products, images, brand, color, material]) {
                        res.render("edit", {
                            products: products,
                            images: images,
                            brand: brand,
                            color: color,
                            material: material,
                            errors: resultValidation.mapped(),
                            oldData: req.body
                        })
                    })
            } else {
                db.Product.update({
                    name: req.body.name,
                    brand_id: req.body.brand,
                    color_id: req.body.color,
                    material_id: req.body.material,
                    price: req.body.price,
                    description: req.body.description
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                db.Image.update({
                    url: req.body.image
                },{
                    where:{
                        id: req.params.id
                    }
    
                })
                res.redirect("/")
    
        }
    }

}
module.exports = Controller