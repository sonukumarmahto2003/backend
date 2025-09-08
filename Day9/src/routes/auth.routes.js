const express = require("express");
const userModel = require("../model/user.model");
const router = express.Router();

router.post("/register",(req,res)=>{
const {fullName,email,password}=req.body;
try {
    const isUserAlreadyExists= userModel.find({email});
    if(isUserAlreadyExists) return res.status(400).json({message:"User already exits"});
    userModel.create({
       fullName,
       email,
       password:password 
    })
} catch (error) {
    console.log("err->", error);
}

})

 
module.exports= router;