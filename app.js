let express=require("express")
let app=express();
let fs=require('fs')
let morgan=require('morgan')
let dotenv=require("dotenv")
dotenv.config()
let categoryRouter=require("./src/controller/CategoryRouter")
let productRouter=require("./src/controller/ProductRouter")
port=process.env.PORT || 3000
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))
//static content
app.use(express.static(__dirname+'/public'))
//html file path
app.set('views','./src/views')
//view engine
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // res.send("its working")
    res.render('index.ejs',{title:'Home Page'})
})
app.use('/category',categoryRouter)
app.use('/products',productRouter)

app.listen(port,(err)=>{
    if (err) throw err
    console.log(`server is running on ${port}`)
})