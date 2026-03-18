let express=require("express")
let app=express();
let dotenv=require("dotenv")
dotenv.config()
let categoryRouter=require("./src/controller/CategoryRouter")
let productRouter=require("./src/controller/ProductRouter")
port=process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("its working")
})
app.use('/category',categoryRouter)
app.use('/products',productRouter)

app.listen(port,(err)=>{
    if (err) throw err
    console.log(`server is running on ${port}`)
})