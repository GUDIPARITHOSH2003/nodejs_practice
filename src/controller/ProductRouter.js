let express=require("express")
let productRouter=express.Router()

productRouter.route('/')
    .get((req,res)=>{
        res.send("products")
    })
productRouter.route('/details')
    .get((req,res)=>{
        res.send("products details")
    })

module.exports=productRouter