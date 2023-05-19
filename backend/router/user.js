const express=require('express');
const router=express.Router();
// const monk=require('monk');
// const db=monk('127.0.0.1:27017/test');
// let 
const eee= require("../modal/searching")
router.post('/posting',async (req,res)=>{
    let searchs;
    try{
        searchs=new eee({
            StudentId:req.body.StudentId,
            Name:req.body.Name,
            Course:req.body.Course,
            RoomNo:req.body.RoomNo
        });
        await searchs.save();
    }
    catch(err){
         console.log(err);
    }
    if(!searchs){
        return res.status(500).json({msg:"something went wrong"});
    }
    return res.status(200).json({searchs});
})
module.exports=router;
