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

    productRouter.route("/category/:id")
    .get((req,res)=>{
        // let id=req.params.id
        let {id}=req.params
        mongodb.connect(url,function(err,dc){
            let dbObj=dc.db('aprnode');
            dbObj.collection('products').find({category_id:Number(id)}).toArray(function(err,products){
                if (err){
                    res.status(500).send("Error while connecting")
                }
                else{
                    res.render('products',{title:'products Page',products,menu})
                }
            })
        })
    })

    productRouter.route("/:id")
    .get((req,res)=>{
        let {id}=req.params
        mongodb.connect(url,function(err,dc){
            let dbObj=dc.db('aprnode');
            dbObj.collection('products').find({id:Number(id)}).toArray(function(err,products){
                if (err){
                    res.status(500).send("Error while connecting")
                }
                else{
                    res.send(products)
                    // res.render('products',{title:'products Page',products,menu})
                }
            })
        })
    })

    productRouter.route('/details')
    .get((req,res)=>{
        res.send("products details")
    })
    return productRouter
}

module.exports=router