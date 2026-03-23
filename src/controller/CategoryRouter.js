let express=require("express")
let categoryRouter=express.Router()
const mongodb=require('mongodb').MongoClient;
let url=process.env.MONGO_URL


function router(menu){
    categoryRouter.route('/')
    .get((req,res)=>{
        mongodb.connect(url,function(err,dc){
            if (err){
                res.status(500).send("Error while connecting")
            }
            else{
                let dbObj=dc.db('aprnode');
                dbObj.collection('category').find().toArray(function(err,category){
                    if (err){
                        res.status(500).send("Error while connecting")
                    }
                    else{
                        res.render('category',{title:'Category Page',category,menu})
                    }
                })
            }
        })
    })
    categoryRouter.route('/details')
    .get((req,res)=>{
        res.send("categorie details")
    })
    return categoryRouter

    
}


module.exports=router