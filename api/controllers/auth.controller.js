const User=require('../models/user.model');
const { errorHandler } = require('../utils/error');
const jwt =require('jsonwebtoken')

exports.signup= async (req,res,next)=>{
    const {username,email,password}=req.body
    const newUser=new User({username,email,password});
    try {await newUser.save()
    res.status(201).json("user created succesfully")}
    catch(error){
        next(error);
    }
}
exports.signin=async(req,res,next)=>{
    const{email,password}=req.body;
    try{
const validUser=await User.findOne({email});
if(!validUser)
return next(errorHandler(404,'user not found!'))
const validPassword={password};
if(!validPassword)
return next(errorHandler(401,"wrong cridential !"))
const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
const {password:pass, ...rest}={validUser}
res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)

    }catch(error)
    {
        next(error);
    }
}