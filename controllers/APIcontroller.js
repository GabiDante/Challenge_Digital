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
            }]
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


    }

module.exports = APIcontroller

//to do falta el endpoint de listado de todas las marcas con sus productos
