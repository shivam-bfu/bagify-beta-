const jwt=require('jsonwebtoken')
const userModel=require('../models/usermodel')
module.exports.isLoggedIn= async (req,res,next)=>
    
    {

    if(!req.cookies.token)
{       
    return res.send('you need to log in')
}

    try{
         
        const decode = jwt.verify(req.cookies.token, process.env.JWT_KEY)
       const email=decode.email
        
        const user= await userModel.findOne({email}).select("-password")
        if(!user)
        {
            return res.status(401).send('invalid token user not found')
        }
        
        req.user=user
        next();
    }
    catch(err)
    {
         console.log("error:: " ,err)
        return res.send('something went wrong')
    }


}