
const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const userRoutes=require('./routes/user.route.js')
const authRouter=require('./routes/auth.route.js')
mongoose.connect(process.env.MONGO).then(()=>{
console.log('connected to Mongodb!');

}).catch((err)=>{
    console.log(err)})

const app=express();
 app.listen(3000,()=>{
    console.log("server is running on port 3000! ")
 })
 app.use(express.json())
 app.use("/api/user",userRoutes)
 app.use("/api/auth",authRouter)
 app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "internal server error";
    return res.status(statusCode).json({
        sucess:false,
        statusCode,
        message,
    })
 })