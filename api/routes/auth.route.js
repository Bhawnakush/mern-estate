const express=require('express');

const {signin,signup,google }=require('../controllers/auth.controller')
const router=express.Router();
router.post("/signup",signup)
router.post("/signin",signin);
router.post("/google",google)
module.exports=router