const db = require("../data/models");
const products = require("../data/models/Products");

const APIcontroller = {

    //Aca va la logica//
    list : (req, res) => {
        db.products
        .findAll()
        .then(products=>{

            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })
        });


    },
    show:(req,res)=>{
        db.products
        .findByPK(req.params.id)
        .then(products =>{
            return res.status(200).json({
                data: products,
                status:200
            })
        })
    },

    store:(req,res)=>{
        db.products
        .create(req.params.id)
        .then(products =>{
            return res.status(200).json({
                data: products,
                status:200,
                created:"ok"
            })
        })
    },

    delete:(req,res)=>{
        db.products
        .destroy({
            where:{
                id:req.params.id
            }
    })
        .then(response=>{

            return res.json(response)
        })
    },


    }

module.exports = APIcontroller

//to do falta el endpoint de listado de todas las marcas con sus productos
