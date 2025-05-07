const express = require("express");

const productModel=require('../models/productmodel')
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/shop', async (req,res)=>{

    let products= await productModel.find()

    res.render('shop',{products:products})
})

module.exports=router;