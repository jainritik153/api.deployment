const express =require("express")
const router = express.Router()
const Product=require('../Models/Product.model')
router.get('/',(req,res,next)=>{
    res.send("list pof products");
})

router.post('/',(req,res,next)=>{
    console.log(req.body)
    const product=new Product(req.body)
    product.save()
    .then(result=>{
        console.log(result);
        res.send(result)
    })
    .catch(err=>{
        console.log(err.message);
    })
})

router.get('/:id',(req,res,next)=>{
    res.send("get product by id")
})

router.patch('/:id',(req,res,next)=>{
    res.send("patch product by id")
})

router.delete('/:id',(req,res,next)=>{
    res.send("delete product by id")
})

module.exports = router