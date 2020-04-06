const express = require('express')
const ProductRoute = require("./Routes/Product.route")
const mongoose=require('mongoose')
require('dotenv').config({path:'./variables.env'})


const app= express();
//mongodb+srv://RitikJain:<password>@cluster0-wlrat.mongodb.net/
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_URL,
    {
        dbName:'RestApi',
        user:'RitikJain',
        pass:'ritikjain',
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log("Mongodb Connected");
})
app.use('/products',ProductRoute)

//any routes which are not handled
app.use((req,res,next)=>{
    const err=new Error("not found")
    err.status=404
    next( err)  
})



//Error handler
app.use((err,req,res,next)=>{
    res.status(err.status|| 500)
    res.send({
        error:{
            status:err.status,
            message:err.message
        }
    })
})

const host=process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log("SErver has started")
})