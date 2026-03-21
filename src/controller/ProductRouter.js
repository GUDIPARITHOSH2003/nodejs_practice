let express=require("express")
let productRouter=express.Router()
const mongodb=require('mongodb').MongoClient;
let url=process.env.MONGO_URL

function router(menu){
    productRouter.route('/')
    .get((req,res)=>{
        mongodb.connect(url,function(err,dc){
            if (err){
                res.status(500).send("Error while connecting")
            }
            else{
                let dbObj=dc.db('aprnode');
                dbObj.collection('products').find().toArray(function(err,products){
                    if (err){
                        res.status(500).send("Error while connecting")
                    }
                    else{
                        res.render('products',{title:'products Page',products,menu})
                    }
                })
            }
        })
    })
    productRouter.route('/details')
    .get((req,res)=>{
        res.send("products details")
    })
    return productRouter
}

module.exports=router