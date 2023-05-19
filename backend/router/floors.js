const express=require('express');
const router=express.Router();
// const monk=require('monk');
// const db=monk('127.0.0.1:27017/test');
// let 
const aaa= require("../modal/Room")
router.post('/posting',async (req,res)=>{
    let rooms;
    try{
        rooms=new aaa({
            StudentId:req.body.StudentId,
            Name:req.body.Name,
            Course:req.body.Course,
            RoomNo:req.body.RoomNo
        });
        await rooms.save();
    }
    catch(err){
         console.log(err);
    }
    if(!rooms){
        return res.status(500).json({msg:"something went wrong"});
    }
    return res.status(200).json({rooms});
})
module.exports=router;
