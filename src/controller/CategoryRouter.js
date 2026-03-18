let express=require("express")
let categoryRouter=express.Router()

categoryRouter.route('/')
    .get((req,res)=>{
        res.send("categories")
    })
categoryRouter.route('/details')
    .get((req,res)=>{
        res.send("categorie details")
    })

module.exports=categoryRouter