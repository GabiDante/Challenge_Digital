const db = require("../data/models");
const products = require("../data/models/Products");

const APIcontroller = {

    //Aca va la logica//
    list : (req, res) => {
        db.Product
        .findAll({
            include: [{
                association: "brands"
            }, {
                association: "materials"
            }, {
                association: "colors"
            },  {
                association: "image"
            }
        ]
        })/* .then(product =>{ 
            db.Image.findAll({where: { 
                product_id: product.id ,
                url: req.body.url
            }}); 
            }) */.then(products=>{

            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })
        });


    },
    show:(req,res)=>{
        db.Product.findByPk(req.params.id)
        .then(product =>{
            return res.status(200).json({
                data: product,
                status:200
            })
        })
    },
    brandName:(req,res)=>{
        db.Brand.findAll({
            include: [{
                association: "products"
            }]
        })
        .then(brand =>{
            return res.status(200).json({
                data: brand,
                status:200
            })
        })
    },
    ultimoProductoCreado:(req,res)=> {
        db.Product.findAll({
                include: [{
                    association: "brands"
                }, {
                    association: "materials"
                }, {
                    association: "colors"
                }, {
                    association: "image"
                }],
                order: [["id" ,'DESC']],
                limit: 1
            })
            .then(products =>{
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                })
               }) 
        }
        
    



    }


module.exports = APIcontroller