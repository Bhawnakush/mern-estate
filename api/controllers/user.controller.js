
const bcryptjs=require('bcryptjs')
const { errorHandler } = require("../utils/error")
const User = require('../models/user.model.js')

exports.test=(req,res)=>{
    res.json({
        message:"api route working fine"
    })
}


exports.updateUser=async(req,res,next)=>{
    if(req.user.id!==req.params.id)
    return next(errorHandler(401,'you can only updTE YOUUUR ACCOUNT '))
try {
    if(req.body.password)
    {
        req.body.password=bcryptjs.hashSync(req.body.password,10)
    }
    const updatedUser=await User.findByIdAndUpdate(req.params.id,{
        $set:{
            username:req.body.username,
            email:req.body.email,
            passwords:req.body.password,
            avatar:req.body.avatar,

        }
    },{new:true})
    const {password,...rest}=updatedUser._doc;
     res.status(200).json(rest);
   
} catch (error) {
    
}
}