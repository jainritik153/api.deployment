const express =require("express")
const router = express.Router()
const Product=require('../Models/Product.model')
router.get('/',async (req,res,next)=>{
    try {
        const results=await Product.find()
        res.send(results)
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/',async (req,res,next)=>{
    console.log(req.body)
    try {
        const product=new Product(req.body)
        const result=await product.save()
        res.send(result) 
    } catch (error) {
        console.log(error.message);
    }
    
    // product.save()
    // .then(result=>{
    //     console.log(result);
    //     res.send(result)
    // })
    // .catch(err=>{
    //     console.log(err.message);
    // })

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