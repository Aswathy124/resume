const express=require("express")
const signmodel=require("../models/signmodel")
const router=express.Router()

router.post("/add",async(req,res)=>
{
    let data=req.body
    let post=new signmodel(data)
    let result=post.save()
    res.json({
        
            
                status:"sucess"
            
        
    })
})
router.get("/viewall",async(req,res)=>{
    let data=await signmodel.find()
    .populate("userid","name age mobile address mark email -_id")
    .exec()
    res.json(data)
})
module.exports=router
