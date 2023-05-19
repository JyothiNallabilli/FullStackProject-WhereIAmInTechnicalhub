const express=require('express');
const router=express.Router();
const monk=require('monk');
const db=monk('127.0.0.1:27017/test');
var cc = db.get("logins");
const fff= require("../modal/logindata")
const ddd= require("../modal/trainerslogin")
const eee= require("../modal/searching")
router.post('/posting',async (req,res)=>{
    let login;
    try{
        login=new fff({
            Name:req.body.Name,
            Password:req.body.Password,
        });
        await login.save();
    }
    catch(err){
         console.log(err);
    }
    if(!login){
        return res.status(500).json({msg:"something went wrong"});
    }
    return res.status(200).json({login});
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
router.get("/getData",(req,res)=>{
    cc.find({},(err,docs)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(docs);
        }
    })
})

module.exports=router;
