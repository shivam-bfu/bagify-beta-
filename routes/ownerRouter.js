const express=require('express')
const bcrypt=require('bcrypt')
const router=express.Router();
const ownerModel=require('../models/ownermodel')
const powerModel=require('../models/productmodel');
const productmodel = require('../models/productmodel');

if(process.env.NODE_ENV==='development'){

router.post('/register', async (req,res)=>{
    const totalOwner= await ownerModel.find()
    if(totalOwner.length>0){
      return  res.status(400).send("owner already exist cant create more")
    }
 else{
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    bcrypt.genSalt(10,(err,salt)=>{

        bcrypt.hash(password,salt, async (err,hash)=>{
            const owner= await ownerModel.create({
                name:name,
                email:email,
                password:hash,
            })
            res.status(201).send("owner created success")
        })
    })
 }
})
}


router.get('/admin',(req,res)=>{
    res.send('this is usr router')
})

router.get('/createProduct',(req,res)=>{
    res.render('createProducts')

})

router.get('/products', async(req,res)=>{
    
    let products= await productmodel.find()
    res.render('adminProduct',{products:products})
})

module.exports=router;