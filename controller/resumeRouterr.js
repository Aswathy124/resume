const express=require("express")
const resumemodel=require("../models/resumemodel")
const route=express.Router()

route.post("/add",async(req,res)=>
{
    let data=req.body
    let resume=new resumemodel(data)
    let result=resume.save()

    res.json({status:"success"})
})

route.get("/viewall",async(req,res)=>{
    let data=await resumemodel.find()
    .populate("userid","name address phone experience postgraduation graduation plustwo tenth certifications extracaricular -_id ")
    .exec()
    res.json(data)
})

module.exports=route



