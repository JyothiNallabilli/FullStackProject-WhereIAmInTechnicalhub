const express=require('express');
const router=express.Router();
// const monk=require('monk');
// const db=monk('127.0.0.1:27017/test');
// let 
const ddd= require("../modal/trainerslogin")
router.post('/posting',async (req,res)=>{
    let logins;
    try{
        logins=new ddd({
            Name:req.body.Name,
            Password:req.body.Password,
        });
        await logins.save();
    }
    catch(err){
         console.log(err);
    }
    if(!logins){
        return res.status(500).json({msg:"something went wrong"});
    }
    return res.status(200).json({logins});
})
module.exports=router;
