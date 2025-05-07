const mongoose=require('mongoose')



const Ownermodel=mongoose.Schema({

    name:{
        type:String,
        minLength:3,
    },
    email:String,
    password:String,
    product:{
        type:Array,
        default:[]
    }, 
})

module.exports=mongoose.model('user',Ownermodel)