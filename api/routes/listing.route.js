const express=require('express');
const { createListing } = require('../controllers/listing.controller.js');
const { verifyToken } = require('../utils/verifyUser');
//const { route } = require('./user.route.js');
const router=express.Router();
  router.post('/create' ,createListing)
  module.exports=router